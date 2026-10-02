import { loginUser } from "./auth.js";

// =====================================================
// ELEMENTS
// =====================================================

const loginForm = document.getElementById("login-form");

const loginError = document.getElementById("login-error");

const loginFormWrapper = document.getElementById("login-form-wrapper");

const successPage = document.getElementById("login-success-page");

const successText = document.getElementById("login-success-text");

const togglePassword = document.getElementById("toggle-password");

const passwordInput = document.getElementById("password");

// =====================================================
// CHECK ELEMENTS
// =====================================================

if (!loginForm) {
  console.error("GiftHub: Login form not found.");
}

// =====================================================
// PASSWORD SHOW / HIDE
// =====================================================

if (togglePassword && passwordInput) {
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
}

// =====================================================
// LOGIN
// =====================================================

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // =================================================
    // GET VALUES
    // =================================================

    const username = document.getElementById("username").value.trim();

    const password = passwordInput.value;

    // =================================================
    // CLEAR PREVIOUS ERROR
    // =================================================

    hideError();

    // =================================================
    // VALIDATION
    // =================================================

    if (!username || !password) {
      showError("Please enter your username and password.");

      return;
    }

    // =================================================
    // LOGIN
    // =================================================

    const user = loginUser(username, password);

    // =================================================
    // INVALID LOGIN
    // =================================================

    if (!user) {
      showError("Invalid username or password. Please try again.");

      return;
    }

    // =================================================
    // LOGIN SUCCESS
    // =================================================

    loginFormWrapper.hidden = true;

    successPage.hidden = false;

    // =================================================
    // ADMIN LOGIN
    // =================================================

    if (user.isAdmin === true) {
      successText.textContent =
        "Welcome back, Admin. Redirecting to the GiftHub admin dashboard...";
    }

    // =================================================
    // NORMAL USER LOGIN
    // =================================================
    else {
      successText.textContent = `Welcome back, ${user.firstName}! Redirecting you to GiftHub...`;
    }

    // =================================================
    // REDIRECT
    // =================================================

    setTimeout(() => {
      if (user.isAdmin === true) {
        window.location.href = "./admin/index.php";
      } else {
        window.location.href = "../cart.php";
      }
    }, 1200);
  });
}

// =====================================================
// SHOW ERROR
// =====================================================

function showError(message) {
  if (!loginError) {
    return;
  }

  loginError.textContent = message;

  loginError.hidden = false;
}

// =====================================================
// HIDE ERROR
// =====================================================

function hideError() {
  if (!loginError) {
    return;
  }

  loginError.textContent = "";

  loginError.hidden = true;
}
