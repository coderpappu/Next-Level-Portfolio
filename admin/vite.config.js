import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The built admin app is served by the Express API from /admin/*, so the
// asset base must match that mount path (see server/app.js).
export default defineConfig({
  base: "/admin/",
  plugins: [react()],
  server: {
    port: 5174,
  },
});
