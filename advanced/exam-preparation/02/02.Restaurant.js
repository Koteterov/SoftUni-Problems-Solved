class Restaurant {
  constructor(budget) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }
  loadProducts(arr) {
    arr.forEach((element) => {
      let [productName, productQuantity, productTotalPrice] =
        element.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (productTotalPrice <= this.budgetMoney) {
        if (!this.stockProducts[productName]) {
          this.stockProducts[productName] = 0;
        }
        this.stockProducts[productName] += productQuantity;
        this.budgetMoney -= productTotalPrice;

        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    });
    return this.history.join("\n");
  }
  addToMenu(meal, arr, price) {
    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: {},
        price,
      };
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    arr.forEach((element) => {
      let tokens = element.split(" ");
      let productQuantity = tokens.pop();
      let productName = tokens.join(" ");
      productQuantity = Number(productQuantity);

      this.menu[meal].products[productName] = productQuantity;
    });

    let mealsQty = Object.keys(this.menu).length;
    let meals = Object.keys(this.menu);
    if (mealsQty == 1) {
      return `Great idea! Now with the ${meals} we have 1 meal in the menu, other ideas?`;
    } else {
      return `Great idea! Now with the ${meal} we have ${mealsQty} meals in the menu, other ideas?`;
    }
  }
  showTheMenu() {
    let allMeals = Object.entries(this.menu);

    if (allMeals.length > 0) {
      let result = [];
      allMeals.forEach((x) => {
        result.push(`${x[0]} - $ ${x[1].price}`);
      });
      return result.join("\n");
    } else {
      return "Our menu is not ready yet, please come later...";
    }
  }
  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {

    let neededProducts = this.menu[meal].products
    let price = this.menu[meal].price

      for (let product in neededProducts) {
        if (
          !this.stockProducts[product] ||
          this.stockProducts[product] < neededProducts[product]
        ) {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }
      for (let product in neededProducts) {
        this.stockProducts[product] -= neededProducts[product];
      }
      this.budgetMoney += price;

      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
    }
  }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
