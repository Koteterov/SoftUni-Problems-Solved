function lowestPrice(input) {
    let result = {};
  
    for (const data of input) {
      let [town, product, price] = data.split(" | ");
      price = Number(price);
  
      if (result.hasOwnProperty(product) == false) {
        result[product] = {
          [town]: price,
        };
      }
  
      if (result[product].hasOwnProperty(town) == false) {
        result[product][town] = price;
      }
    }
    let forSorting = Object.entries(result);
  
    forSorting.forEach((x) => {
      let sorted = Object.entries(x[1]).sort((a, b) => {
        return a[1] - b[1];
      });
      console.log(`${x[0]} -> ${sorted[0][1]} (${sorted[0][0]})`);
    });
  }
  
  lowestPrice([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ]);
  