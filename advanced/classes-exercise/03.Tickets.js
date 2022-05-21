function solve(array, sortCriterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];
  array.forEach((x) => {
    let [destination, price, status] = x.split("|");
    price = Number(price);

    let obj = new Ticket(destination, price, status);
    result.push(obj);
  });

  let sorted = result.sort((a, b) => {
    if (typeof a[sortCriterion] == "number") {
      return a[sortCriterion] - b[sortCriterion];
    } else {
      return a[sortCriterion].localeCompare(b[sortCriterion]);
    }
  });
  
  return sorted;
}

solve(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'status'
   );
