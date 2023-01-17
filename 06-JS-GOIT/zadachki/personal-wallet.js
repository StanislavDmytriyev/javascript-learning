const transactionTypes = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  // Просто создает объект транзакции, принимает сумму и тип транзакции
  createTransaction(amount, type) {
    return { amount: amount, type: type, id: Math.floor(Math.random() * 100) };
  },

  // Добавляет сумму в баланс, принимает сумму, вызывает метод createTransaction(), чтобы создать объект, засовывает объект в массив transactions[]
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(
      amount,
      transactionTypes.DEPOSIT
    );
    this.transactions.push(newTransaction);
  },

  // Отнимает сумму из баланса, принимает сумму, вызывает метод createTransaction(), чтобы создать объект, засовывает объект в массив transactions[]
  withdraw(amount) {
    this.balance -= amount;
    const newTransaction = this.createTransaction(
      amount,
      transactionTypes.WITHDRAW
    );
    this.transactions.push(newTransaction);
  },

  // Просто возвращает текущий баланс
  getBalance() {
    return this.balance;
  },

  // Ищет по ИД транзакцию в истории транзакций и возвращает ее
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
      return {};
    }
  },

  // Ищет все транзакции указанного типа и указывает их общую сумму (только этого типа транзакций)
  getTransactionTotal(type) {
    let result = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        result += transaction.amount;
      }
      return result;
    }
  },

  getMinTransaction() {
    let result = this.transactions[0].amount;
    let minIndex = 0;
    for (const transaction of this.transactions) {
      if (transaction.amount < result) {
        result = transaction.amount;
        minIndex = this.transactions.indexOf(transaction);
      }
    }
    return minIndex;
  },
};

account.deposit(1000);
account.deposit(5000);
account.withdraw(300);
console.log(account.getBalance());
console.log(account.transactions);
