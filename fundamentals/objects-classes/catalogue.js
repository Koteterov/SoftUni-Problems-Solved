function catal(input) {
    let catalogue = [];
  
    for (const data of input) {
      let [name, price] = data.split(" : ");
      price = +price;
      let productObj = {
        name,
        price,
      };
      catalogue.push(productObj);
    }
    catalogue.sort((a, b) => a.name.localeCompare(b.name));
  
    let firstLetter = "";
    catalogue.forEach((product) => {
      if (product.name.charAt(0).toUpperCase() == firstLetter) {
        console.log(` ${product.name}: ${product.price}`);
      } else {
        firstLetter = product.name.charAt(0).toUpperCase();
        console.log(firstLetter);
        console.log(` ${product.name}: ${product.price}`);
      }
    });
  }
  
  catal([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ]);
  