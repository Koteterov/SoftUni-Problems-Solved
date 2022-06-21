class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    horsepower = Number(horsepower);
    price = Number(price);
    mileage = Number(mileage);

    let notValid =
      model == "" ||
      horsepower < 0 ||
      !Number.isInteger(horsepower) ||
      price < 0 ||
      mileage < 0;

    if (notValid) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let modelFound = this.availableCars.find((x) => x.model == model);

    if (!modelFound) {
      throw new Error(`${model} was not found!`);
    }

    let diff = modelFound.mileage - desiredMileage;
    let price = modelFound.price;

    if (modelFound.mileage <= desiredMileage) {
      this.totalIncome += price;
      this.soldCars.push({
        model,
        horsepower: modelFound.horsepower,
        soldPrice: price,
      });
      this.availableCars = this.availableCars.filter(
        (cars) => cars != modelFound
      );
      return `${modelFound.model} was sold for ${price.toFixed(2)}$`;
      
    } else if (diff <= 40000) {
      price *= 0.95;
      this.totalIncome += price;
      this.soldCars.push({
        model,
        horsepower: modelFound.horsepower,
        soldPrice: price,
      });
      this.availableCars = this.availableCars.filter(
        (cars) => cars != modelFound
      );
      return `${modelFound.model} was sold for ${price.toFixed(2)}$`;

    } else if (diff > 40000) {
      price *= 0.9;
      this.totalIncome += price;
      this.soldCars.push({
        model,
        horsepower: modelFound.horsepower,
        soldPrice: price,
      });
      this.availableCars = this.availableCars.filter(
        (cars) => cars != modelFound
      );
      return `${modelFound.model} was sold for ${price.toFixed(2)}$`;
    }
  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return "There are no available cars";
    }

    let result = ["-Available cars:"];
    this.availableCars.forEach((car) => {
      result.push(
        `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
      );
    });
    return result.join("\n");
  }

  salesReport(criteria) {

    if (criteria != "horsepower" && criteria != "model") {
      throw new Error("Invalid criteria!");
    }

    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
      let result = [
        `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        `-${this.soldCars.length} cars sold:`,
      ];
      this.soldCars.forEach((car) => {
        result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
      });
      return result.join('\n');

    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
      let result = [
        `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        `-${this.soldCars.length} cars sold:`,
      ];
      this.soldCars.forEach((car) => {
        result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
      });
      return result.join('\n');
    }
  }
}



let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));

