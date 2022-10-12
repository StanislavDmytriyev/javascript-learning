// Длина строки
const fullName = "Stanislav Dmytriyev";
console.log(fullName.length);

// Переберем символы в этой строке
for (let i = 0; i < fullName.length; i++) {
  console.log(fullName[i]);
}

// Перебор символов через FOR OF
for (const letter of fullName) {
  console.log(letter);
}

// считаем количество каких-то символов в строке
let symbolCount = 0;
for (let i = 0; i < fullName.length; i++) {
  if (fullName[i] === "v") {
    symbolCount++;
  }
}
console.log(symbolCount);

// Заменяем какаие-то символы в строке (саму строку в JS изменить нельзя)
let result = "";
for (let i = 0; i < fullName.length; i++) {
  if (fullName[i] === " ") {
    result = result + "---";
  } else {
    result = result + fullName[i];
  }
}
console.log(result);

//удаление символов в строке
let result2 = "";

for (let i = 0; i < fullName.length; i++) {
  if (fullName[i] !== " ") {
    result2 += fullName[i];
  }
}
console.log(result2); // 'MynameisMisha'
