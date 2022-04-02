
function barcode(input) {
  let pattern = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/;
  let nr = Number(input.shift());
  for (let i = 0; i < nr; i++) {
    const element = input[i];

    if (pattern.exec(element) == null) {
      console.log("Invalid barcode");
    } else {
      let match = pattern.exec(element);
      let product = match[2];
      let patt = /(?<prd>[0-9])/g;
      let matchNr = patt.exec(product);

      if (matchNr == null) {
        console.log(`Product group: 00`);
      } else {
        let grToPrint = "";
        while (matchNr != null) {
          let group = matchNr[1];
          grToPrint += group;
          matchNr = patt.exec(product);
        }
        console.log(`Product group: ${grToPrint}`);
      }
    }
  }
}

barcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);

//   barcode(["3",
//   "@#FreshFisH@#",
//   "@###Brea0D@###",
//   "@##Che4s6E@##"])

//============================================================

function solve(input) {
    let patternText = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    let patternDigit = /\d/;
    let nr = Number(input.shift());
  
    for (let i = 0; i < nr; i++) {
      let element = input[i];
  
      if (patternText.test(element)) {
        if (patternDigit.test(element)) {
          let temp = [...element].filter((x) => patternDigit.test(x)).join("");
          console.log(`Product group: ${temp}`);
        } else {
          console.log("Product group: 00");
        }
      } else {
        console.log("Invalid barcode");
      }
    }
  }
  
  // solve([
  //   "6",
  //   "@###Val1d1teM@###",
  //   "@#ValidIteM@#",
  //   "##InvaliDiteM##",
  //   "@InvalidIteM@",
  //   "@#Invalid_IteM@#",
  //   "@#ValiditeM@#",
  // ]);
  
//====================================================================

function solve1(input) {
    const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const patternDigit = /\d/;
    
    input.shift();
  
    input.forEach(barcode => {
      if (patternBarcode.test(barcode)) {
        const productGroup = [...barcode]
          .filter(char => patternDigit.test(char))
          .join('');
  
        if (productGroup.length > 0) {
          console.log(`Product group: ${productGroup}`);
        } else {
          console.log(`Product group: 00`);
        }
      } else {
        console.log('Invalid barcode');
      }
    });
  }

  solve1 ([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
  ]);
  