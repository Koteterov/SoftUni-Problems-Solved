function battle(input) {
  let result = {};

  while (input[0] != "Results") {
    let line = input.shift();

    let [command, name] = line.split(":");
    if (command == "Add") {
      let [, , health, energy] = line.split(":");
      health = Number(health);
      energy = Number(energy);

      if (result.hasOwnProperty(name) == false) {
        result[name] = {
          health,
          energy,
        };
      } else {
        result[name].health += health;
      }
    } else if (command == "Attack") {
      let [, attacker, defender, damage] = line.split(":");
      damage = Number(damage);

      if (result.hasOwnProperty(attacker) && result.hasOwnProperty(defender)) {
        result[defender].health -= damage;
        result[attacker].energy -= 1;

        if (result[defender].health <= 0) {
          delete result[defender];
          console.log(`${defender} was disqualified!`);
        }
        if (result[attacker].energy <= 0) {
          delete result[attacker];
          console.log(`${attacker} was disqualified!`);
        }
      }
      
    } else if (command == "Delete") {
      let [, name] = line.split(":");

      if (name == "All") {
        result = {};
      }
      if (result.hasOwnProperty(name)) {
        delete result[name];
      }
    }
  }
  let counter = Object.keys(result).length;
  console.log(`People count: ${counter}`);
  for (let data in result) {
    console.log(`${data} - ${result[data].health} - ${result[data].energy}`);
  }
  
}

// battle([
//   "Add:Mark:1000:5",
//   "Add:Clark:1000:2",
//   "Attack:Clark:Mark:500",
//   "Attack:Clark:Mark:800",
//   "Add:Charlie:4000:10",
//   "Results",
// ]);

// battle(["Add:Bonnie:3000:5",
// "Add:Kent:10000:10",
// "Add:Johny:4000:10",
// "Attack:Johny:Bonnie:400",
// "Add:Johny:3000:5",
// "Add:Peter:7000:1",
// "Delete:Kent",
// "Results"])

battle
(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Add:Aleks:1000:70",
"Add:Tom:4000:1",
"Results"])

