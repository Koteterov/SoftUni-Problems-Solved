function shoot(input) {
  let targets = input.shift().split(" ").map(Number);

  while (input[0] != "End") {
    let index = input.shift();
    index = Number(index);
    let shot = targets[index];

    if (validIndex(index, targets)) {
      if (shot != -1) {
        targets[index] = -1;
      }
      for (let i = 0; i < targets.length; i++) {
        if (targets[i] > -1) {
          if (targets[i] > shot) {
            targets[i] -= shot;
          } else {
            targets[i] += shot;
          }
        }
      }
    }
  }
  let count = targets.filter((x) => x == -1).length;
  let result = targets.join(" ");

  console.log(`Shot targets: ${count} -> ${result}`);

  function validIndex(index, arr) {
    return index >= 0 && index < arr.length;
  }
}

shoot(["24 50 36 70", "0", "4", "3", "1", "End"]);
// shoot(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
