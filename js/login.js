import { loginUser } from "./auth.js";

// =====================================================
// ELEMENTS
// =====================================================

const loginForm = document.getElementById("login-form");

const loginError = document.getElementById("login-error");

const loginSuccess = document.getElementById("login-success");

const loginFormWrapper = document.getElementById("login-form-wrapper");

const successPage = document.getElementById("login-success-page");

const successText = document.getElementById("login-success-text");

const togglePassword = document.getElementById("toggle-password");

const passwordInput = document.getElementById("password");

// =====================================================
// PASSWORD SHOW / HIDE
// =====================================================

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  if (isPassword) {
    passwordInput.type = "text";

    togglePassword.textContent = "🙈";

    togglePassword.setAttribute("aria-label", "Hide password");
  } else {
    passwordInput.type = "password";

    togglePassword.textContent = "👁";

    togglePassword.setAttribute("aria-label", "Show password");
  }
});

// =====================================================
// LOGIN
// =====================================================

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // ================= VALUES =================

  const username = document.getElementById("username").value.trim();

  const password = passwordInput.value;

  hideError();

  // ================= LOGIN =================

  const user = loginUser(username, password);

  // ================= INVALID =================

  if (!user) {
    showError("Invalid username or password. Please try again.");

    return;
  }

  // ================= SUCCESS =================

  loginFormWrapper.hidden = true;

  successPage.hidden = false;

  if (user.role === "admin") {
    successText.textContent =
      "Welcome back, Admin. Redirecting to the GiftHub admin dashboard...";
  } else {
    successText.textContent = `Welcome back, ${user.firstName}! Redirecting you to GiftHub...`;
  }

  // ================= REDIRECT =================

  setTimeout(() => {
    if (user.role === "admin") {
      window.location.href = "../admin/index.php";
    } else {
      window.location.href = "../index.php";
    }
  }, 1200);
});

// =====================================================
// SHOW ERROR
// =====================================================

function showError(message) {
  loginError.textContent = message;

  loginError.hidden = false;
}

// =====================================================
// HIDE ERROR
// =====================================================

function hideError() {
  loginError.hidden = true;

  loginError.textContent = "";
}
