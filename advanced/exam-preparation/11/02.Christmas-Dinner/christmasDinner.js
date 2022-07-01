class ChristmasDinner {
  constructor(budget) {
    this.budget = Number(budget);
    this.dishes = [];
    this.products = [];
    this.guests = {};
    // if (this.budget < 0) {
    //   throw new Error("The budget cannot be a negative number");
    // }
  }
  get budget() {
    return this._budget;
  }

  set budget(value) {
    if (value < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    return (this._budget = value);
  }

  shopping(product) {
    let [type, price] = product;
    price = Number(price);
    if (this.budget < price) {
      throw new Error("Not enough money to buy this product");
    }
    this.products.push(type);
    this.budget -= price;
    return `You have successfully bought ${type}!`;
  }

  recipes(recipe) {
    recipe.productsList.forEach((p) => {
      if (!this.products.includes(p)) {
        throw new Error("We do not have this product");
      }
    });
    this.dishes.push({
      recipeName: recipe.recipeName,
      productsList: recipe.productsList,
    });
    return `${recipe.recipeName} has been successfully cooked!`;
  }
  inviteGuests(name, dish) {
    let foundDish = this.dishes.find((d) => d.recipeName == dish);
    if (!foundDish) {
      throw new Error("We do not have this dish");
    }

    if (this.guests[name]) {
      throw Error("This guest has already been invited");
    }

    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let result = [];
    Object.entries(this.guests).forEach((x) => {
      let [name, dish] = x;
      let products = this.dishes.find((d) => d.recipeName == dish);
      let string = `${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`
      result.push(string);
    });

    return result.join("\n");
  }
}

let dinner = new ChristmasDinner(300);
dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
// dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
console.log(dinner.inviteGuests("Georgi", "Peppers filled with beans"));

console.log(dinner.showAttendance());

dinner;
