function easter(input) {
  let pattern = /(@+|#+)([a-z]{3,})(@+|#+)[^A-Za-z0-]*\/+(\d+)\/+/g

  let match = pattern.exec(input[0]);

  while (match != null) {
    let color = match[2];
    let qty = match[4];

    console.log(`You found ${qty} ${color} eggs!`);

    match = pattern.exec(input[0]);
  }
}

easter([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
// easter(["#@##@red@#/8/@rEd@/2/#@purple@////10/"]);
