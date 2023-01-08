const logins = ["vasek", "dodik", "stani", "kirill"];

const checkLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind} найден`;
    }
    return `Пользователь ${loginToFind} НЕ НАЙДЕН`;
  }
};

const checkLoginTernar = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден (тернарник)`
    : `Пользователь ${loginToFind} НЕ НАЙДЕН (тернарник)`;
};

const kirill = checkLogin(logins, "vasek");
console.log(kirill);

console.log(checkLogin(logins, "jenia"));

console.log(checkLoginTernar(logins, "jenia"));
