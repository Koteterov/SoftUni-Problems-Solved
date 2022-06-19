class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });

    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plantFound = this.plants.find((p) => p.plantName == plantName);

    if (!plantFound) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plantFound.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    plantFound.quantity += quantity;
    plantFound.ripe = true;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plantFound = this.plants.find((p) => p.plantName == plantName);

    if (!plantFound) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (plantFound.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    this.storage.push({
      plantName,
      quantity: plantFound.quantity,
    });
    this.spaceAvailable += plantFound.spaceRequired;
    this.plants = this.plants.filter((p) => p != plantFound);
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let result = [`The garden has ${this.spaceAvailable} free space left.`];

    let names = [];
    this.plants.forEach((p) => {
      names.push(p.plantName);
    });
    names.sort((a, b) => a.localeCompare(b));
    result.push(`Plants in the garden: ${names.join(", ")}`);

    if (this.storage.length == 0) {
      return "Plants in storage: The storage is empty.";
    } else {
      let names = [];
      this.storage.forEach((p) => {
        names.push(`${p.plantName} (${p.quantity})`);
      });

      result.push(`Plants in storage: ${names.join(", ")}`);
    }
    return result.join("\n");
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberr", 10));
console.log(myGarden.addPlant("raspber", 10));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant('raspberry'));
console.log(myGarden.harvestPlant("orange"));
// console.log(myGarden.harvestPlant("apple"));
console.log(myGarden.generateReport());
console.log(myGarden.plants);