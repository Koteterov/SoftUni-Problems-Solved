function travelTime(input) {
    let result = {};
  
    for (const data of input) {
      let [country, town, price] = data.split(" > ");
      price = Number(price);
  
      if (!Object.keys(result).includes(country)) {
        result[country] = {};
      }
      if (!Object.keys(result[country]).includes(town)) {
        result[country][town] = price;
      }
  
      if (price < result[country][town]) {
        result[country][town] = price;
      }
    }
  
    let sortedByCountry = Object.entries(result).sort(sortCountries);
  
    for (let [name, towns] of sortedByCountry) {
      let sortedByPrice = Object.entries(towns).sort(sortTown);
      let forPrinting = `${name} -> `;
      for (let [townName, townPrice] of sortedByPrice) {
        forPrinting += `${townName} -> ${townPrice} `;
      }
      console.log(forPrinting);
    }
  
    function sortCountries(firstCountry, secondCountry) {
      return firstCountry[0].localeCompare(secondCountry[0]);
    }
  
    function sortTown(firstTown, secondTown) {
      return firstTown[1] - secondTown[1];
    }
  }
  
  travelTime(
    [
      'Bulgaria > Sofia > 25000',
      'Bulgaria > Sofia > 25000',
      'Kalimdor > Orgrimar > 25000',
      'Albania > Tirana > 25000',
      'Bulgaria > Varna > 25010',
      'Bulgaria > Lukovit > 10'
      ]
          );
  
  