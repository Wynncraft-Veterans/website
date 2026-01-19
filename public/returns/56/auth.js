// auth.js

// Simple SHA-256 hashing function
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// === CONFIG ===
const PASSWORD_HASH =
  "b46a79fa9c30a4eb6051298023fc4ee7af40b4a178ecb2126554aa0967b6ecf2";

const STORAGE_KEY = "vets_auth_ok";

// Handle login form on login.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return; // not on login page

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pwdInput = document.getElementById("password");
    const errorEl = document.getElementById("error");

    if (!pwdInput || !errorEl) return;

    errorEl.textContent = "";

    const pwd = pwdInput.value;

    try {
      const hash = await sha256(pwd);

      if (hash === PASSWORD_HASH) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        // redirect to your main page
        console.log("✔ Login successful — redirecting now...");
        window.location.href = "mapping_return_admin.html";
      } else {
        errorEl.textContent = "Incorrect password.";
      }
    } catch (err) {
      console.error(err);
      errorEl.textContent = "Something went wrong. Try again.";
    }
  });
});

// Exported helper to protect other pages
export function protectPage() {
  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    return; // already authenticated
  }

  // if not on login page, send to login
  if (!window.location.pathname.endsWith("login.html")) {
    window.location.href = "login.html";
  }
}
