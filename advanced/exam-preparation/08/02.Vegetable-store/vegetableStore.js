class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    let obj = {};
    vegetables.forEach((v) => {
      let [type, quantity, price] = v.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      if (!obj[type]) {
        obj[type] = { quantity, price };
      } else {
        obj[type].quantity += quantity;
      }
      if (obj[type].price < price) {
        obj[type].price = price;
      }
    });
    this.availableProducts.push(obj);
    let products = Object.keys(obj);
    return `Successfully added ${products.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    selectedProducts.forEach(p => {
        let [type, quantity] = p.split(" ");
        quantity = Number(quantity);
        let found = this.availableProducts.find(p => p[type]);

        if (!found) {
            throw Error(
            `${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`
          );
        }
        if (found[type].quantity < quantity) {
            throw Error(
            `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`
          );

        }
        found[type].quantity -= quantity;
        totalPrice += found[type].price * quantity;
    })
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;

  }

  rottingVegetable(type, quantity) {
    let found = this.availableProducts.find((p) => p[type]);

    if (!found) {
      throw Error(`${type} is not available in the store.`);
    }
    if (found[type].quantity < quantity) {
      found[type].quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    found[type].quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let result = ["Available vegetables:"];
    this.availableProducts.forEach((x) => {
      Object.entries(x)
        .sort((a, b) => {
          return a[1].price - b[1].price;
        })
        .forEach((p) => {
          result.push(`${p[0]}-${p[1].quantity}-$${p[1].price}`);
        });
    });
    result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
    return result.join('\n')
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

console.log(vegStore.availableProducts);
