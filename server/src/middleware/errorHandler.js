// eslint-disable-next-line no-unused-vars
module.exports = function errorHandler(err, req, res, next) {
  console.error(err);

  if (/^Origin ".*" is not allowed by CORS$/.test(err.message || "")) {
    return res.status(403).json({ error: err.message });
  }

  // Postgres unique_violation
  if (err.code === "23505") {
    return res
      .status(409)
      .json({ error: "A record with that value already exists." });
  }

  // Postgres foreign_key_violation
  if (err.code === "23503") {
    return res
      .status(409)
      .json({ error: "This record is referenced elsewhere and can't be changed that way." });
  }

  const status = err.status || 500;
  res
    .status(status)
    .json({ error: status < 500 ? err.message : "Internal server error" });
};
