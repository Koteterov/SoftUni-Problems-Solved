function needForSpeed(input) {
    let cars = {};
  
    let nr = input.shift();
  
    for (let i = 0; i < nr; i++) {
      let [car, mileage, fuel] = input.shift().split("|");
      mileage = Number(mileage);
      fuel = Number(fuel);
      cars[car] = {
        mileage,
        fuel,
      };
    }
  
    while (input[0] != "Stop") {
      let line = input.shift().split(" : ");
      let command = line[0];
      if (command == "Drive") {
        drive(line);
      } else if (command == "Refuel") {
        refuel(line);
      } else if (command == "Revert") {
        revert(line);
      }
      function drive(line) {
        let [_, car, distance, fuel] = line;
        distance = Number(distance);
        fuel = Number(fuel);
        if (cars[car].fuel < fuel) {
          console.log("Not enough fuel to make that ride");
        } else {
          cars[car].mileage += distance;
          cars[car].fuel -= fuel;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
          );
        }
        if (cars[car].mileage >= 100000) {
          delete cars[car];
          console.log(`Time to sell the ${car}!`);
        }
      }
      function refuel(line) {
        let [_, car, fuel] = line;
        fuel = Number(fuel);
        if (cars[car].fuel + fuel <= 75) {
          cars[car].fuel += fuel;
          console.log(`${car} refueled with ${fuel} liters`);
        } else {
          let oldFuel = cars[car].fuel;
          let newFuel = 75;
          let diff = newFuel - oldFuel;
          console.log(`${car} refueled with ${diff} liters`);
          cars[car].fuel = 75;
        }
      }
      function revert(line) {
        let [_, car, km] = line;
        km = Number(km);
  
        cars[car].mileage -= km;
        if (cars[car].mileage > 10000) {
          console.log(`${car} mileage decreased by ${km} kilometers`);
        } else {
          cars[car].mileage = 10000;
        }
      }
    }
    for (let data in cars) {
      console.log(
        `${data} -> Mileage: ${cars[data].mileage} kms, Fuel in the tank: ${cars[data].fuel} lt.`
      );
    }
  }
  
  needForSpeed([
      '3',
      'Audi A6|38000|62',
      'Mercedes CLS|11000|35',
      'Volkswagen Passat CC|45678|5',
      'Drive : Audi A6 : 543 : 47',
      'Drive : Mercedes CLS : 94 : 11',
      'Drive : Volkswagen Passat CC : 69 : 8',
      'Refuel : Audi A6 : 50',
      'Revert : Mercedes CLS : 500',
      'Revert : Audi A6 : 30000',
      'Stop'
    ]
    )
  
//   needForSpeed([
//     "4",
//     "Lamborghini Veneno|11111|74",
//     "Bugatti Veyron|12345|67",
//     "Koenigsegg CCXR|67890|12",
//     "Aston Martin Valkryie|99900|50",
//     "Drive : Koenigsegg CCXR : 382 : 82",
//     "Drive : Aston Martin Valkryie : 99 : 23",
//     "Drive : Aston Martin Valkryie : 2 : 1",
//     "Refuel : Lamborghini Veneno : 40",
//     "Revert : Bugatti Veyron : 2000",
//     "Stop",
//   ]);
  