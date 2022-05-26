function auto(input) {
  let output = {};

  input.forEach((car) => {
    let [brand, model, qty] = car.split(" | ");
    qty = Number(qty);
    if (output.hasOwnProperty(brand) == false) {
      output[brand] = {};
      output[brand][model] = 0;
    }
    if (output[brand].hasOwnProperty(model) == false) {
      output[brand][model] = 0;
    }
    output[brand][model] += qty;
  });
  
  for (let brand in output) {
    console.log(`${brand}`);
    Object.entries(output[brand]).forEach((x) => {
      console.log(`###${x[0]} -> ${x[1]}`);
    });
  }
}

auto([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
