// 1. СНАЧАЛА СОЗДАЛ ПЕРЕМЕННЫЕ

const employees = 5;
const minSalary = 500;
const maxSalary = 4000;
let totalSalary = 0;

// 2. ПЕРЕБРАЛ РАБОТНИКОВ

for (i = 1; i <= employees; i += 1) {
  // 3. СДЕЛАЛ ГЕНЕРАТОР СЛУЧАЙНОЙ ЗАРПЛАТЫ
  const individualSalary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );

  // 4. Сделал чтобы на каждой итерации зарплата добавлялась в общую зарплату
  totalSalary += individualSalary;

  // 5. Повыводил все в консоль на каждой итерации
  console.log(
    `Работник номер ${i}, с зарплатой ${individualSalary}, общая зарплата на всех ${totalSalary}`
  );
}
