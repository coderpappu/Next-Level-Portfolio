import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { api } from "../api.js";
import { getResourceConfig } from "../resourceConfigs.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";

// Generic list view for all 12 collection-router-backed resources: a table
// of rows (columns per resourceConfigs.js `listColumns`), edit/delete
// actions, an "Add new" button, and — for the 11 resources that have a
// sort_order column — drag-to-reorder via native HTML5 drag events.
export default function CollectionListPage() {
  const { uiPath } = useParams();
  const config = getResourceConfig(uiPath);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);
  const [savingOrder, setSavingOrder] = useState(false);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiPath]);

  function load() {
    setLoading(true);
    setError(null);
    api
      .get(`/api/admin/${config.apiPath}`)
      .then(setRows)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  async function handleDelete(row) {
    const label = row[config.listColumns[0].key] || `#${row.id}`;
    if (!window.confirm(`Delete "${label}"? This cannot be undone.`)) return;
    try {
      await api.del(`/api/admin/${config.apiPath}/${row.id}`);
      setRows((prev) => prev.filter((r) => r.id !== row.id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleDrop(index) {
    if (dragIndex === null || dragIndex === index) {
      setDragIndex(null);
      return;
    }
    const next = rows.slice();
    const [moved] = next.splice(dragIndex, 1);
    next.splice(index, 0, moved);
    setRows(next);
    setDragIndex(null);
    saveOrder(next);
  }

  async function saveOrder(next) {
    setSavingOrder(true);
    setError(null);
    try {
      await api.put(`/api/admin/${config.apiPath}/reorder`, { order: next.map((r) => r.id) });
    } catch (err) {
      setError(`Failed to save new order: ${err.message}`);
      load(); // re-sync from server since the optimistic reorder didn't persist
    } finally {
      setSavingOrder(false);
    }
  }

  if (!config) {
    return <Banner type="error">Unknown resource "{uiPath}".</Banner>;
  }

  return (
    <div>
      <PageHeader
        title={config.label}
        description={config.reorderable ? "Drag rows by the handle to reorder." : undefined}
        actions={
          <Link
            to={`/${config.uiPath}/new`}
            className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            <Plus size={16} /> Add {config.singular}
          </Link>
        }
      />

      <Banner type="error">{error}</Banner>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <p className="p-6 text-center text-sm text-slate-500">Loading…</p>
        ) : rows.length === 0 ? (
          <p className="p-6 text-center text-sm text-slate-500">No {config.label.toLowerCase()} yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                {config.reorderable && <th className="w-8 px-3 py-2" />}
                {config.listColumns.map((col) => (
                  <th key={col.key} className="px-3 py-2 font-medium">
                    {col.label}
                  </th>
                ))}
                <th className="w-24 px-3 py-2 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  draggable={config.reorderable}
                  onDragStart={() => setDragIndex(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                  className={`border-b border-slate-100 last:border-0 hover:bg-slate-50 ${
                    dragIndex === index ? "opacity-50" : ""
                  }`}
                >
                  {config.reorderable && (
                    <td className="px-3 py-2 text-slate-400" title="Drag to reorder">
                      <GripVertical size={16} className="cursor-grab" />
                    </td>
                  )}
                  {config.listColumns.map((col) => (
                    <td key={col.key} className="max-w-xs truncate px-3 py-2 text-slate-700">
                      {formatCell(row[col.key])}
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        to={`/${config.uiPath}/${row.id}`}
                        className="rounded p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                        aria-label="Edit"
                      >
                        <Pencil size={15} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(row)}
                        className="rounded p-1.5 text-red-500 hover:bg-red-100"
                        aria-label="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {savingOrder && <p className="mt-2 text-xs text-slate-500">Saving order…</p>}
    </div>
  );
}

function formatCell(value) {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}
