import React from "react";
import { ACTION_META, resourceLabel, relativeTime } from "../lib/activity.js";

// Shared list body used both by the compact dashboard panel and the full
// paginated /admin/activity page — every action type ships an icon + text
// label together (never color alone), per the dataviz status-palette rule.
export default function ActivityFeed({ items, loading, empty = "No activity yet." }) {
  if (loading) return <p className="p-4 text-sm text-slate-500">Loading…</p>;
  if (!items.length) return <p className="p-4 text-sm text-slate-500">{empty}</p>;

  return (
    <ul className="divide-y divide-slate-100">
      {items.map((item) => {
        const meta = ACTION_META[item.action] || { label: item.action, color: "#898781", Icon: null };
        const Icon = meta.Icon;
        return (
          <li key={item.id} className="flex items-start gap-3 px-1 py-2.5">
            <span
              className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${meta.color}1a`, color: meta.color }}
            >
              {Icon && <Icon size={14} />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-slate-800">
                <span className="font-medium" style={{ color: meta.color }}>
                  {meta.label}
                </span>{" "}
                {resourceLabel(item.resource)}
                {item.resource_label ? (
                  <span className="text-slate-500"> — {item.resource_label}</span>
                ) : null}
              </p>
              <p className="text-xs text-slate-400">
                {relativeTime(item.created_at)}
                {item.admin_email ? ` · ${item.admin_email}` : ""}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
