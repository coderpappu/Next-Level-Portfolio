// Thin fetch wrapper shared by the whole admin app.
//
// In dev, VITE_API_BASE_URL points at the API dev server (different port,
// see .env.development). In production the admin build is served BY the
// same Express app that serves the API, so this defaults to "" and every
// request becomes a same-origin relative call — no CORS involved.
export const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

const TOKEN_KEY = "admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

/**
 * Prefixes a server-relative media URL (e.g. "/uploads/profile/x.jpg") with
 * the API base so it loads correctly whether the admin app and API share an
 * origin (production) or not (dev, different ports).
 */
export function mediaUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url}`;
}

class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

let onUnauthorized = null;
export function setUnauthorizedHandler(fn) {
  onUnauthorized = fn;
}

async function request(path, { method = "GET", body, isFormData = false, headers = {} } = {}) {
  const token = getToken();
  const finalHeaders = { ...headers };
  if (token) finalHeaders.Authorization = `Bearer ${token}`;
  if (!isFormData && body !== undefined) finalHeaders["Content-Type"] = "application/json";

  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: finalHeaders,
      body: isFormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    throw new ApiError("Network error — could not reach the API.", 0, null);
  }

  if (res.status === 401) {
    setToken(null);
    if (onUnauthorized) onUnauthorized();
    let parsedBody = null;
    try {
      parsedBody = await res.json();
    } catch {
      /* ignore */
    }
    throw new ApiError(parsedBody?.error || "Session expired. Please log in again.", 401, parsedBody);
  }

  if (res.status === 204) return null;

  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await res.json().catch(() => null) : null;

  if (!res.ok) {
    throw new ApiError(data?.error || `Request failed (${res.status})`, res.status, data);
  }

  return data;
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: "POST", body }),
  put: (path, body) => request(path, { method: "PUT", body }),
  del: (path) => request(path, { method: "DELETE" }),
  upload: (path, formData) => request(path, { method: "POST", body: formData, isFormData: true }),
};

export { ApiError };
