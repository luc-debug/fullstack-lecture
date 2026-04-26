/*************************************************
 * JavaScript-Grundlagenprojekt für React
 * Gesamter Beispielcode (ein Stück)
 *************************************************/

/* ----------------------------------------------
 * Unteraufgabe 1 – Variablen & Destructuring
 * ---------------------------------------------- */
const user = {
  id: 1,
  name: "Max",
  age: 25,
  isActive: true,
  role: null,
};

const { name, age, isActive } = user;
console.log("Name:", name);
console.log("Alter:", age);
console.log("Aktiv:", isActive);


/* ----------------------------------------------
 * Unteraufgabe 2 – Arrow Functions & Callbacks
 * ---------------------------------------------- */
const users = [
  { name: "Max", isActive: true, isAdmin: false },
  { name: "Anna", isActive: false, isAdmin: true },
  { name: "Tom", isActive: true, isAdmin: false },
];

const getActiveUsers = (users) => {
  return users.filter(user => user.isActive);
};

console.log("Aktive User:", getActiveUsers(users));


/* ----------------------------------------------
 * Unteraufgabe 3 – Array-Methoden
 * map / filter / reduce
 * ---------------------------------------------- */
const activeUserNames = users
  .filter(user => user.isActive)
  .map(user => user.name);

console.log("Namen aktiver User:", activeUserNames);

const activeUserCount = users.reduce((count, user) => {
  return user.isActive ? count + 1 : count;
}, 0);

console.log("Anzahl aktiver User:", activeUserCount);


/* ----------------------------------------------
 * Unteraufgabe 4 – Short-Circuit Evaluation
 * ---------------------------------------------- */
const isLoggedIn = true;

isLoggedIn && console.log("Willkommen zurück!");

const hasUsers = users.length > 0;
hasUsers && console.log("Es gibt Benutzer im System");


/* ----------------------------------------------
 * Unteraufgabe 5 – Nullish Coalescing (??)
 * ---------------------------------------------- */
const usernameFromApi = null;
const displayName = usernameFromApi ?? "Gast";

console.log("Anzeigename:", displayName);

// Vergleich zu ||
const emptyName = "";
console.log(emptyName || "Gast"); // Gast
console.log(emptyName ?? "Gast"); // ""


/* ----------------------------------------------
 * Unteraufgabe 6 – Optional Chaining (?.)
 * ---------------------------------------------- */
const apiResponse = {
  user: {
    profile: {
      email: "test@mail.de",
    },
  },
};

console.log("E-Mail:", apiResponse.user?.profile?.email);
console.log("Straße:", apiResponse.user?.address?.street); // undefined, kein Fehler


/* ----------------------------------------------
 * Unteraufgabe 7 – Default Parameter
 * ---------------------------------------------- */
function greetUser(username = "Gast") {
  console.log(`Hallo ${username}`);
}

greetUser();
greetUser("Max");


/* ----------------------------------------------
 * Unteraufgabe 8 – Spread Operator (...)
 * ---------------------------------------------- */
const originalUser = {
  name: "Max",
  age: 25,
};

const updatedUser = {
  ...originalUser,
  age: 26,
};

console.log("Original:", originalUser);
console.log("Updated:", updatedUser);


/* ----------------------------------------------
 * Unteraufgabe 9 – Ternary Operator
 * ---------------------------------------------- */
const isAdmin = false;

const roleMessage = isAdmin
  ? "Admin-Zugriff"
  : "Normaler Benutzer";

console.log(roleMessage);


/* ----------------------------------------------
 * Abschluss – Alles kombiniert
 * ---------------------------------------------- */
function renderUser(user) {
  const name = user.name ?? "Gast";

  return user.isActive
    ? `✅ ${name} ist aktiv`
    : `❌ ${name} ist inaktiv`;
}

console.log(renderUser({ name: "Anna", isActive: true }));
console.log(renderUser({ isActive: false }));
