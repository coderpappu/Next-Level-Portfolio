import React from "react";

// Small inline error/success message strip used across list & form pages.
export default function Banner({ type = "error", children }) {
  if (!children) return null;
  const styles =
    type === "error"
      ? "border-red-200 bg-red-50 text-red-700"
      : "border-green-200 bg-green-50 text-green-700";
  return <div className={`mb-4 rounded-md border px-4 py-2 text-sm ${styles}`}>{children}</div>;
}
