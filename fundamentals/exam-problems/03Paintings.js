function paint(input) {
  let painting = input.shift().split(" ").map(Number);

  while (input[0] != "END") {
    let line = input.shift().split(" ");
    let command = line[0];

    if (command == "Change") {
      let [_, nr, newNr] = line;
      nr = Number(nr);
      newNr = Number(newNr);
      if (painting.includes(nr)) {
        let indexNr = painting.indexOf(nr);
        painting.splice(indexNr, 1, newNr);
      }
    } else if (command == "Hide") {
      let nr = line[1];
      nr = Number(nr);

      if (painting.includes(nr)) {
        let indexNr = painting.indexOf(nr);
        painting.splice(indexNr, 1);
      }
    } else if (command == "Switch") {
      let [_, nr1, nr2] = line;
      nr1 = Number(nr1);
      nr2 = Number(nr2);

      if (painting.includes(nr1) && painting.includes(nr2)) {
        let index1 = painting.indexOf(nr1);
        let index2 = painting.indexOf(nr2);
        // let buff = painting[index1];
        // painting[index1] = painting[index2];
        // painting[index2] = buff;
        [painting[index1],painting[index2]] = [painting[index2],painting[index1]]

      }
    } else if (command == "Insert") {
      let [_, index, nr] = line;
      index = Number(index);
      nr = Number(nr);
      let valid = index >= 0 && index < painting.length;
      if (valid) {
        painting.splice(index + 1, 0, nr);
      }
    } else if (command == "Reverse") {
      painting = painting.reverse();
    }
  }

  console.log(painting.join(" "));
}

paint([
  "115 101 114 73 111 116 75",
  "Insert 5 114",
  "Switch 116 73",
  "Hide 76",
  "END",
]);

paint([
  "77 120 115 101 97 78 88 112 111 108 110",
  "Switch 97 98",
  "Hide 88",
  "Change 120 117",
  "END",
]);

// paint([
//   "65 304 97 79 12 659",
//   "Reverse",
//   "Change 73 70",
//   "Insert 10 85",
//   "END",
// ]);
