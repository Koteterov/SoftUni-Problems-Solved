function manOfWar(input) {
    let piratStatus = input.shift().split(">").map(Number);
    let warshipStatus = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
  
    let isStalemate = true;
  
    for (const commands of input) {
      let [command] = commands.split(" ");
  
      if (command == "Fire") {
        let [_, index, damage] = commands.split(" ");
        index = Number(index);
        damage = Number(damage);
        if (index >= 0 && index < warshipStatus.length) {
          warshipStatus[index] -= damage;
          if (warshipStatus[index] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            isStalemate = false;
            break;
          }
        }
      } else if (command == "Defend") {
        let [_, start, end, damage] = commands.split(" ");
        start = Number(start);
        end = Number(end);
        damage = Number(damage);
        let validIndex =
          start >= 0 &&
          start < piratStatus.length &&
          end >= 0 &&
          end < piratStatus.length;
  
        if (validIndex) {
          for (let i = start; i <= end; i++) {
            piratStatus[i] -= damage;
  
            if (piratStatus[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              isStalemate = false;
  
              break;
            }
          }
        }
      } else if (command == "Repair") {
        let [_,index, health] = commands.split(" ");
        index = Number(index);
        health = Number(health);
        let validIndexHealth = index >= 0 && index < piratStatus.length;
  
        if (validIndexHealth) {
          if (piratStatus[index] + health < maxHealth) {
            piratStatus[index] += health;
          } else {
            piratStatus[index] = maxHealth;
          }
        }
      } else if (command == "Status") {
        let count = piratStatus.filter((x) => x < maxHealth * 0.2);
  
        console.log(`${count.length} sections need repair.`);
      } else if (command == "Retire") {
        break;
      }
  
    }
  
    if (isStalemate) {
      let pirateShipSum = piratStatus.reduce((acc, el) => acc + el);
      let warshipSum = warshipStatus.reduce((acc, el) => acc + el);
      console.log(`Pirate ship status: ${pirateShipSum}`);
      console.log(`Warship status: ${warshipSum}`);
    }
  }
  
//   manOfWar([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire",
//   ]);
  

manOfWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])


function manOWar(array) {
 
  let PirateShip = array.shift().split('>').map(Number)
  let warShip = array.shift().split('>').map(Number)
  let health = array.shift().split().map(Number)

  let isValid = (index, arr) => index >= 0 && index < arr.length
  let isDead=false

  for (let line of array) {
      let [command, ...elements] = line.split(' ')
      if (command === 'Retire') {
          break
      }
      else if (command === 'Fire') {
          let index = Number(elements[0])
          let damage = Number(elements[1])
          if (isValid(index, warShip)) {
              /*let damage = (warShip.splice(index, 1)) - Number(elements[1])
              warShip.splice(index, 0, damage)
              */ warShip[index] -= damage
              if (warShip[index] <= 0) {
                  isDead=true
                  console.log(`You won! The enemy ship has sunken.`);
                  break
              }
          }
      } else if (command === 'Defend') {
          let index = Number(elements[0])
          let index2 = Number(elements[1])
          let damage = Number(elements[2])

          if (isValid(index, PirateShip)) {
              if (index2 < PirateShip.length && index2 >= 0) {
                  for (let i = index; i <= index2; i++) {
                      PirateShip[i] -= damage
                      if (PirateShip[i] <= 0) {
                          isDead=true
                          console.log(`You lost! The pirate ship has sunken.`);
                          break
                      }
                  }

              }

          }
      } else if (command === 'Repair') {
          let index = Number(elements[0])
          let index2 = Number(elements[1])
          if (isValid(index, PirateShip)) {
             // let num=Number(PirateShip[index])
              if ((PirateShip[index] + index2) < health) {
                  // health-=index2
                  PirateShip[index] += index2
              } else {
                  PirateShip[index] = health
              }
              //  console.log(health);
          }

      } else if (command === 'Status') {

          let sumWar = 0
          for (let k = 0; k < warShip.length; k++) {
              sumWar += warShip[k]
          }

          let countPirate=0
          let sumPirate=0
          for(let g=0; g<PirateShip.length;g++){
              sumPirate+=PirateShip[g]
              if(PirateShip[g]<health*0.2){
                  countPirate++
              }
          }
          console.log(`${countPirate} sections need repair.`);

      }
  }
if(!isDead){
 let pointsPirate= PirateShip.reduce((sum,el)=>sum+el,0)
  console.log(`Pirate ship status: ${pointsPirate}`);
  let warPoints=warShip.reduce((sum,el)=>sum+el,0)
  console.log(`Warship status: ${warPoints}`);
}

}
// manOWar(["2>3>4>5>2",
// "6>7>8>9>10>11",
// "20",
// "Status",
// "Fire 2 3",
// "Defend 0 4 11",
// "Repair 3 18",
// "Retire"])