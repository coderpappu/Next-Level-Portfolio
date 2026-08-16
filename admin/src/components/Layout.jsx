import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

export default function Layout() {
  return (
    // h-screen + overflow-hidden caps the whole layout at exactly the
    // viewport height so the body itself never scrolls — otherwise a tall
    // page scrolls the sidebar away with it instead of staying pinned, since
    // min-h-screen lets this container grow past 100vh when content is tall.
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* No max-width cap — content fills whatever space the viewport
            actually has next to the sidebar instead of leaving large empty
            margins on wide monitors. */}
        <div className="px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
