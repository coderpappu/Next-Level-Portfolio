// Vercel preview deployments are generated per-branch/PR with an unbounded
// set of URLs, so they're matched by pattern rather than enumerated.
const VERCEL_PREVIEW_RE = /^https:\/\/[\w-]+\.vercel\.app$/;

const allowlist = (process.env.CORS_ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function isSameOrigin(origin, host) {
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// Exported as a delegate function (req, callback) rather than a static
// options object so the same-origin check below can see the request's own
// Host header. This matters because the admin SPA is served BY this same
// Express app (same-origin in production, and in local dev when running
// against the built admin bundle) — but browsers still attach an Origin
// header to fetch() calls even when the request is same-origin, so without
// this check every admin-panel API call gets rejected as "cross-origin".
module.exports = function corsOptionsDelegate(req, callback) {
  const origin = req.header("Origin");

  // No Origin header: same-origin navigation, curl, server-to-server — allow.
  if (!origin) return callback(null, { origin: true });

  if (
    isSameOrigin(origin, req.headers.host) ||
    allowlist.includes(origin) ||
    VERCEL_PREVIEW_RE.test(origin)
  ) {
    return callback(null, { origin: true });
  }

  return callback(new Error(`Origin "${origin}" is not allowed by CORS`));
};
