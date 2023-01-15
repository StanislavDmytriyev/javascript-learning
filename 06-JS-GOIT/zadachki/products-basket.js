const productsCard = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    const amendedProduct = {
      quantity: 1,
      ...product,
    };
    this.items.push(amendedProduct);
  },

  remove(productName) {
    const items = this.items;
    for (let i = 0; i < items.length; i += 1) {
      if (productName === items[i].name) {
        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const items = this.items;
    let totalSum = 0;
    for (const item of items) {
      totalSum += item.price * item.quantity;
    }
    return totalSum;
  },

  increaseQuantity(productName) {
    const items = this.items;
    for (let item of items) {
      if (productName === item.name) {
        item.quantity += 1;
      }
    }
  },

  decreaseQuantity(productName) {
    const items = this.items;
    for (let item of items) {
      if (productName === item.name) {
        if (item.quantity > 0) item.quantity -= 1;
      }
    }
  },
};

productsCard.add({ name: "🍕", price: 100 });
productsCard.add({ name: "🍔", price: 120 });
productsCard.add({ name: "🥐", price: 80 });
productsCard.add({ name: "🍗", price: 50 });

console.table(productsCard.getItems());

productsCard.remove("🍕");
productsCard.remove("🍔");
console.table(productsCard.getItems());

productsCard.clear();
console.log(productsCard.getItems());

productsCard.add({ name: "🍕", price: 100 });
productsCard.add({ name: "🍔", price: 120 });
productsCard.add({ name: "🥐", price: 80 });
productsCard.add({ name: "🍗", price: 50 });

console.table(productsCard.getItems());

console.log(productsCard.countTotalPrice());

productsCard.increaseQuantity("🍕");
productsCard.increaseQuantity("🍕");
productsCard.decreaseQuantity("🍗");
productsCard.decreaseQuantity("🍗");
productsCard.decreaseQuantity("🍗");
console.table(productsCard.getItems());

console.log(productsCard.countTotalPrice());
