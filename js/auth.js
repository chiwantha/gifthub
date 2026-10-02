import { users as defaultUsers } from "../data/users.js";

// =====================================================
// STORAGE KEYS
// =====================================================

const USERS_KEY = "gifthub_users";
const AUTH_KEY = "gifthub_auth";

// =====================================================
// GET USERS
// =====================================================

export function getUsers() {
  const savedUsers = localStorage.getItem(USERS_KEY);

  // ===================================================
  // NO SAVED USERS
  // ===================================================

  if (!savedUsers) {
    return [...defaultUsers];
  }

  try {
    const users = JSON.parse(savedUsers);

    if (!Array.isArray(users)) {
      return [...defaultUsers];
    }

    // =================================================
    // DEFAULT USERS
    // =================================================
    // Keep the users from users.js as the source of
    // truth for the demo accounts.
    //
    // This prevents old localStorage data from changing
    // things like isAdmin.
    // =================================================

    const defaultUserIds = defaultUsers.map((user) => user.id);

    const registeredUsers = users.filter(
      (user) => !defaultUserIds.includes(user.id),
    );

    return [...defaultUsers, ...registeredUsers];
  } catch (error) {
    console.error("GiftHub: Failed to load users", error);

    return [...defaultUsers];
  }
}

// =====================================================
// SAVE USERS
// =====================================================

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// =====================================================
// REGISTER USER
// =====================================================

export function registerUser(userData) {
  const users = getUsers();

  // Check username
  const usernameExists = users.some(
    (user) => user.username.toLowerCase() === userData.username.toLowerCase(),
  );

  if (usernameExists) {
    return {
      success: false,
      message: "Username already exists.",
    };
  }

  // Check email
  const emailExists = users.some(
    (user) => user.email.toLowerCase() === userData.email.toLowerCase(),
  );

  if (emailExists) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  // Generate new ID
  const newId =
    users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

  const newUser = {
    id: newId,

    firstName: userData.firstName,

    lastName: userData.lastName,

    username: userData.username,

    email: userData.email,

    password: userData.password,

    image:
      userData.image ||
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",

    // Normal registered users are NEVER admins
    isAdmin: false,
  };

  users.push(newUser);

  saveUsers(users);

  return {
    success: true,
    user: newUser,
  };
}

// =====================================================
// LOGIN USER
// =====================================================

export function loginUser(username, password) {
  const users = getUsers();

  const user = users.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password,
  );

  // Invalid login
  if (!user) {
    return null;
  }

  // Create logged-in user object
  const loggedUser = {
    id: user.id,

    firstName: user.firstName,

    lastName: user.lastName,

    username: user.username,

    email: user.email,

    image: user.image,

    isAdmin: Boolean(user.isAdmin),

    role: user.isAdmin ? "admin" : "user",
  };

  saveAuth(loggedUser);

  return loggedUser;
}

// =====================================================
// SAVE AUTH
// =====================================================

export function saveAuth(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

// =====================================================
// GET AUTH USER
// =====================================================

export function getAuthUser() {
  const savedAuth = localStorage.getItem(AUTH_KEY);

  if (!savedAuth) {
    return null;
  }

  try {
    return JSON.parse(savedAuth);
  } catch (error) {
    console.error("GiftHub: Failed to load auth", error);

    return null;
  }
}

// =====================================================
// IS LOGGED IN
// =====================================================

export function isLoggedIn() {
  return getAuthUser() !== null;
}

// =====================================================
// IS ADMIN
// =====================================================

export function isAdmin() {
  const user = getAuthUser();

  return user?.isAdmin === true;
}

// =====================================================
// IS NORMAL USER
// =====================================================

export function isUser() {
  const user = getAuthUser();

  return user?.isAdmin === false;
}

// =====================================================
// GET USER ROLE
// =====================================================

export function getUserRole() {
  const user = getAuthUser();

  if (!user) {
    return null;
  }

  return user.isAdmin ? "admin" : "user";
}

// =====================================================
// LOGOUT
// =====================================================

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

// =====================================================
// REQUIRE LOGIN
// =====================================================

export function requireLogin() {
  if (!isLoggedIn()) {
    window.location.href = "../login.php";

    return false;
  }

  return true;
}

// =====================================================
// REQUIRE ADMIN
// =====================================================

// =====================================================
// REQUIRE ADMIN
// =====================================================

export function requireAdmin() {
  // Not logged in
  if (!isLoggedIn()) {
    window.location.href = "../login.php";

    return false;
  }

  // Logged in but not admin
  if (!isAdmin()) {
    window.location.href = "../../index.php";

    return false;
  }

  return true;
}
