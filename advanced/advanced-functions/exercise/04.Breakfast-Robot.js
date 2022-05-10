function robot() {
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  const actions = {
    restock,
    prepare,
    report,
  };

  return function (input) {
    let [command, product, quantity] = input.split(" ");
    quantity = Number(quantity);

    return actions[command](product, quantity);
  };

  function restock(element, quantity) {
    ingredients[element] += quantity;
    return "Success";
  }

  function prepare(recipe, quantity) {
    let enough = true;
    let message = "";

    Object.entries(recipes[recipe]).forEach((x) => {
      let [element, neededQty] = x;

      if (enough && ingredients[element] < neededQty * Number(quantity)) {
        enough = false;
        message = `Error: not enough ${element} in stock`;
      }
    });

    if (enough) {
      Object.entries(recipes[recipe]).forEach((x) => {
        let [element, neededQty] = x;
        ingredients[element] -= neededQty * quantity;
        message = "Success";
      });
    }
    return message;
  }

  function report() {
    let message = Object.entries(ingredients)
      .map((x) => `${x[0]}=${x[1]}`)
      .join(" ");
    return message;

    //// OR:
    //   let message = "";
    //   Object.entries(ingredients).forEach((x) => {
    //     let [element, qty] = x;
    //     message += `${element}=${qty} `;
    //   });
    //   message = message.trimEnd();
    //   return message;
  }
}

let manager = robot();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

