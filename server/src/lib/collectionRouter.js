const express = require("express");
const db = require("../db");
const { logActivity, pickLabel } = require("./activityLog");

function pick(source, fields) {
  const out = {};
  for (const field of fields) {
    if (Object.prototype.hasOwnProperty.call(source, field)) {
      out[field] = source[field];
    }
  }
  return out;
}

// node-postgres serializes a raw JS array bind parameter as a Postgres ARRAY
// literal ("{a,b,c}"), not JSON — fine for a real array column, invalid for
// a jsonb column expecting "[...]" text. `jsonFields` lists which of this
// resource's columns are jsonb-typed arrays/objects so their values get
// JSON.stringify'd before hitting the query; jsonb reads back out already
// parsed by pg's own type parsers, so no symmetric step is needed on GET.
function stringifyJsonFields(payload, jsonFields) {
  for (const field of jsonFields) {
    if (Object.prototype.hasOwnProperty.call(payload, field)) {
      payload[field] = JSON.stringify(payload[field]);
    }
  }
  return payload;
}

/**
 * Builds a standard list/create/read/update/delete/reorder router for a
 * single-table content collection. Used for the 12 resources whose CRUD
 * shape is identical (projects, awards, testimonials, experience, education,
 * services, process steps, tech stack groups, socials, known-for,
 * professional profiles, pages) so each one is a config entry instead of a
 * bespoke ~80-line route file.
 *
 * `fields` are the columns a client may set via POST/PUT — anything else in
 * the request body is silently dropped, so `id`/`created_at`/`updated_at`
 * can never be overwritten from the outside. `jsonFields` (a subset of
 * `fields`) are the jsonb columns needing the stringify step above.
 */
function collectionRouter({ table, fields, jsonFields = [], hasSortOrder = true }) {
  const router = express.Router();

  if (hasSortOrder) {
    // Registered before `/:id` so a literal "/reorder" path isn't swallowed
    // by the `:id` param route.
    router.put("/reorder", async (req, res, next) => {
      try {
        const { order } = req.body;
        if (!Array.isArray(order) || order.some((id) => !Number.isInteger(id))) {
          return res
            .status(400)
            .json({ error: "Body must be { order: number[] } of row ids." });
        }
        await db.transaction(async (trx) => {
          await Promise.all(
            order.map((id, index) =>
              trx(table).where({ id }).update({ sort_order: index }),
            ),
          );
        });
        logActivity({
          email: req.admin?.email,
          action: "reordered",
          resource: table,
          resourceLabel: `${order.length} items`,
        });
        res.json({ ok: true });
      } catch (err) {
        next(err);
      }
    });
  }

  router.get("/", async (req, res, next) => {
    try {
      const query = db(table);
      if (hasSortOrder) query.orderBy("sort_order", "asc").orderBy("id", "asc");
      else query.orderBy("id", "asc");
      res.json(await query);
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const row = await db(table).where({ id: req.params.id }).first();
      if (!row) return res.status(404).json({ error: "Not found" });
      res.json(row);
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const payload = stringifyJsonFields(pick(req.body, fields), jsonFields);
      const [row] = await db(table).insert(payload).returning("*");
      logActivity({
        email: req.admin?.email,
        action: "created",
        resource: table,
        resourceId: row.id,
        resourceLabel: pickLabel(row),
      });
      res.status(201).json(row);
    } catch (err) {
      next(err);
    }
  });

  router.put("/:id", async (req, res, next) => {
    try {
      const payload = stringifyJsonFields(pick(req.body, fields), jsonFields);
      payload.updated_at = db.fn.now();
      const [row] = await db(table)
        .where({ id: req.params.id })
        .update(payload)
        .returning("*");
      if (!row) return res.status(404).json({ error: "Not found" });
      logActivity({
        email: req.admin?.email,
        action: "updated",
        resource: table,
        resourceId: row.id,
        resourceLabel: pickLabel(row),
      });
      res.json(row);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const existing = await db(table).where({ id: req.params.id }).first();
      if (!existing) return res.status(404).json({ error: "Not found" });
      await db(table).where({ id: req.params.id }).del();
      logActivity({
        email: req.admin?.email,
        action: "deleted",
        resource: table,
        resourceId: existing.id,
        resourceLabel: pickLabel(existing),
      });
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  });

  return router;
}

module.exports = { collectionRouter, pick };
