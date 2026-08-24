import { getUsers, saveUsers } from "./auth.js";

// =====================================================
// ELEMENTS
// =====================================================

const registerForm = document.getElementById("register-form");

const formWrapper = document.getElementById("register-form-wrapper");

const successMessage = document.getElementById("register-success");

const errorMessage = document.getElementById("register-error");

// =====================================================
// FORM SUBMIT
// =====================================================

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // ================= GET VALUES =================

  const firstName = document.getElementById("first-name").value.trim();

  const lastName = document.getElementById("last-name").value.trim();

  const email = document.getElementById("email").value.trim().toLowerCase();

  const username = document
    .getElementById("username")
    .value.trim()
    .toLowerCase();

  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirm-password").value;

  // ================= VALIDATION =================

  if (password !== confirmPassword) {
    showError("Passwords do not match.");

    return;
  }

  if (password.length < 6) {
    showError("Password must contain at least 6 characters.");

    return;
  }

  // ================= GET USERS =================

  const users = getUsers();

  // ================= CHECK USERNAME =================

  const usernameExists = users.some(
    (user) => user.username.toLowerCase() === username,
  );

  if (usernameExists) {
    showError("This username is already taken.");

    return;
  }

  // ================= CHECK EMAIL =================

  const emailExists = users.some((user) => user.email.toLowerCase() === email);

  if (emailExists) {
    showError("An account with this email already exists.");

    return;
  }

  // ================= CREATE USER =================

  const newUser = {
    id: Date.now(),

    firstName: firstName,

    lastName: lastName,

    username: username,

    email: email,

    password: password,

    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  };

  // ================= SAVE USER =================

  users.push(newUser);

  saveUsers(users);

  // ================= SHOW SUCCESS =================

  formWrapper.hidden = true;

  successMessage.hidden = false;

  successMessage.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

// =====================================================
// SHOW ERROR
// =====================================================

function showError(message) {
  errorMessage.textContent = message;

  errorMessage.hidden = false;

  errorMessage.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
