function warrior(input) {
    
  let string = input.shift();
  let commands = [
    "GladiatorStance",
    "DefensiveStance",
    "Dispel",
    "Target Change",
    "Target Remove",
  ];

  while (input[0] != "For Azeroth") {
    let line = input.shift().split(" ");
    let command = line[0];
    if (commands.includes(command)) {

      if (command == "GladiatorStance") {
        string = string.toUpperCase();
        console.log(string);

      } else if (command == "DefensiveStance") {
        string = string.toLowerCase();
        console.log(string);

      } else if (command == "Dispel") {
        let index = line[1];
        index = Number(index);
        let letter = line[2];
        let valid = index >= 0 && index < string.length;
        if (valid) {
          let left = string.slice(0, index);
          let right = string.slice(index + 1);
          string = left + letter + right;
          console.log("Success!");
        } else {
          console.log("Dispel too weak.");
        }
      }
    } else if (command == "Target") {
      if (line[1] == "Change") {
        let first = line[2];
        let second = line[3];
        string = string.split(first).join(second);
        console.log(string);
      } else if (line[1] == "Remove") {
        let substr = line[2];

        if (string.includes(substr)) {
          string = string.split(substr).join("");
          console.log(string);
        }

      } else {
        console.log(`Command doesn't exist!`);
      }

    } else {
      console.log(`Command doesn't exist!`);
    }
  }
}

// warrior([
//   "fr1c710n",
//   "GladiatorStance",
//   "Dispel 2 I",
//   "Dispel 4 T",
//   "Target Change RICTION riction",
//   "For Azeroth",
// ]);

warrior([
  "DYN4MICNIC",
  "Target Remove NIC",
  "Dispel 3 A",
  "DefensiveStance",
  "Target Change d D",
  "target change D d",
  "For Azeroth",
]);
