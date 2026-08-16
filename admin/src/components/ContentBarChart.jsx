import React from "react";
import { Link } from "react-router-dom";

// Comparing one measure (row count) across category labels is a magnitude
// comparison, not an identity comparison — per the dataviz method that's a
// single sequential hue applied uniformly, not one color per bar. A single
// series needs no legend box: every bar already carries its own category
// label, which is the identity channel here.
const BAR_FILL = "#2a78d6"; // sequential blue, step 450
const BAR_FILL_HOVER = "#1c5cab"; // step 550 — the "hovered mark lifts" cue

export default function ContentBarChart({ data, loading }) {
  const sorted = [...data].sort((a, b) => b.value - a.value);
  const max = Math.max(...sorted.map((d) => d.value), 1);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold text-slate-900">Content by type</h2>
      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <div className="space-y-1">
          {sorted.map((d) => {
            const Row = d.href ? Link : "div";
            return (
              <Row
                key={d.label}
                {...(d.href ? { to: d.href } : {})}
                className="group -mx-2 flex items-center gap-3 rounded-md px-2 py-1 hover:bg-slate-50"
              >
                <span className="w-40 shrink-0 truncate text-xs text-slate-600" title={d.label}>
                  {d.label}
                </span>
                <div className="h-5 flex-1 rounded-sm bg-slate-100">
                  <div
                    className="h-5 rounded-r-sm transition-colors"
                    style={{
                      width: `${d.value > 0 ? Math.max((d.value / max) * 100, 2) : 0}%`,
                      backgroundColor: BAR_FILL,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BAR_FILL_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BAR_FILL)}
                    title={`${d.label}: ${d.value}`}
                  />
                </div>
                <span className="w-6 shrink-0 text-right text-xs font-semibold tabular-nums text-slate-900">
                  {d.value}
                </span>
              </Row>
            );
          })}
        </div>
      )}
    </div>
  );
}
