import { users as defaultUsers } from "../data/users.js";

// =====================================================
// STORAGE KEY
// =====================================================

const USERS_KEY = "gifthub_users";

// =====================================================
// AUTH KEY
// =====================================================

const AUTH_KEY = "gifthub_auth";

// =====================================================
// GET USERS
// =====================================================

export function getUsers() {
  const savedUsers = localStorage.getItem(USERS_KEY);

  // No registered users yet

  if (!savedUsers) {
    return [...defaultUsers];
  }

  try {
    const users = JSON.parse(savedUsers);

    return Array.isArray(users) ? users : [...defaultUsers];
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
// LOGIN USER
// =====================================================

export function loginUser(username, password) {
  // ================= ADMIN =================

  if (username === "admin" && password === "admin") {
    const admin = {
      id: 0,

      firstName: "GiftHub",

      lastName: "Admin",

      username: "admin",

      email: "admin@gifthub.lk",

      role: "admin",
    };

    saveAuth(admin);

    return admin;
  }

  // ================= NORMAL USERS =================

  const users = getUsers();

  const user = users.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password,
  );

  if (!user) {
    return null;
  }

  const loggedUser = {
    ...user,

    role: "user",
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
    return null;
  }
}

// =====================================================
// IS LOGGED IN
// =====================================================

export function isLoggedIn() {
  return Boolean(getAuthUser());
}

// =====================================================
// LOGOUT
// =====================================================

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

// =====================================================
// IS ADMIN
// =====================================================

export function isAdmin() {
  const user = getAuthUser();

  return user?.role === "admin";
}

// =====================================================
// IS NORMAL USER
// =====================================================

export function isUser() {
  const user = getAuthUser();

  return user?.role === "user";
}
