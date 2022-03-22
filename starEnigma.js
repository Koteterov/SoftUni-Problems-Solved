function starEnigma(input) {
  let nr = Number(input.shift());
  let letters = ["s", "t", "a", "r"];
  let pattern =
    /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>[0-9]+)!(?<type>[AD]+)![^@\-!:>]*->(?<count>[0-9]+)/g;

  let countAttacked = [];
  let countDestroyed = [];

  for (let i = 0; i < nr; i++) {
    let message = input[i];

    let count = 0;
    for (let letter of message) {
      letter = letter.toLowerCase();
      if (letters.includes(letter)) {
        count++;
      }
    }
    let decrypted = message.split("").map((x) => {
      return String.fromCharCode(x.charCodeAt() - count);
    });
    decrypted = decrypted.join("");
    let match = pattern.exec(decrypted);

    while (match != null) {
      if (match.groups.type == "A") {
        countAttacked.push(match.groups.planet);
      } else if (match.groups.type == "D") {
        countDestroyed.push(match.groups.planet);
      }

      match = pattern.exec(decrypted);
    }
  }
  countAttacked.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${countAttacked.length}`);
  countAttacked.forEach((x) => {
    console.log(`-> ${x}`);
  });
  countDestroyed.sort((a, b) => a.localeCompare(b));
  console.log(`Destroyed planets: ${countDestroyed.length}`);
  countDestroyed.forEach((x) => {
    console.log(`-> ${x}`);
  });
}

//   starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);

starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
