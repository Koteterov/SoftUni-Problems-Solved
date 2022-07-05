class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  get budget() {
    return this._budget;
  }

  set budget(value) {
    if (value < 0) {
      throw Error("The budget cannot be a negative number");
    }
     this._budget = value;
  }

  shopping(product) {
    let [type, price] = product;
    price = Number(price);
    if (this._budget < price) {
      throw Error("Not enough money to buy this product");
    }
    this.products.push(type);
    this._budget -= price;

    return `You have successfully bought ${type}!`;
  }

  recipes(recipe) {
    recipe.productsList.forEach((p) => {
      if (!this.products.includes(p)) {
        throw Error("We do not have this product");
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
      throw Error("We do not have this dish");
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
      let products = this.dishes.find((d) => {
        return d.recipeName == dish;
      });
      result.push(
          `${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`
      )
    });

   return result.join('\n')
  }

}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(["Salt", 1]));
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
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());

