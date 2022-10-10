// Создал массив с именами
const names = ["Stani", "Kirill", "Jenia", "Rita", "Lena", "Nina", "Grisha"];

// сделал цикл LOOP ---> for() {}
// for (firstName = назначил переменную) of names = из массива names
for (firstName of names) {
  // вывел эту переменную firstName в лог, посколько индекс массива не был указан, то она даст каждый string из массива
  console.log(firstName);
  if (firstName === "Jenia") {
    console.log("Jenia is on my list");
    // на этом месте цикл НЕ обрывается, а продолжается до конца элементов массива
  }
}
for (firstName of names) {
  console.log(`Hi there, ${firstName}`);
  if (firstName === "Jenia") {
    console.log("Jenia is on my list");
    // на этом месте цикл обрывается, то есть по достижении firstName === "Jenia" , цикл уходит на break
    break;
  }
}

// Это получается бесконечный цикл, т.к. loading = 0, и оно не меняется, и оно всегда меньше 100
let loading = 0;
while (loading < 100) {
  console.log("Web page is loading...");
  // и пишем условие, когда этот цикл пректатится, то есть чтобы с каждым "кругом" (итерацией) наш текущий loading рос на +1
  // можно записать loading += 1; , но если только на + 1, то можно просто написать loading++;
  loading++;
}
