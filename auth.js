// URL server kamu
const BASE_URL = 'http://localhost/backend-php'; // ganti sesuai URL hosting

export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/login.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return await res.json();
}

export async function registerUser(username, email, password) {
  const res = await fetch(`${BASE_URL}/register.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  return await res.json();
}
