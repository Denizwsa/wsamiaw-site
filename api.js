const WSAMIAW_API = "https://wsamiaw-api.wsamiaw.workers.dev";

async function apiPost(path, body, token) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = "Bearer " + token;
  const res = await fetch(WSAMIAW_API + path, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

async function apiGet(path, token) {
  const headers = {};
  if (token) headers.Authorization = "Bearer " + token;
  const res = await fetch(WSAMIAW_API + path, { headers });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function saveSession(token, email) {
  localStorage.setItem("wsamiaw_token", token);
  localStorage.setItem("wsamiaw_email", email);
}

function clearSession() {
  localStorage.removeItem("wsamiaw_token");
  localStorage.removeItem("wsamiaw_email");
}

function getSession() {
  const token = localStorage.getItem("wsamiaw_token");
  const email = localStorage.getItem("wsamiaw_email");
  if (!token || !email) return null;
  return { token, email };
}
