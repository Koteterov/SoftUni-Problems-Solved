function messageEncrypter(input) {
  let pattern =
    /(\*|@)([A-Z][a-z]{2,})\1: (\[([A-Za-z])\]\|)(\[([A-Za-z])\]\|)(\[([A-Za-z])\]\|)$/;

  let nr = input.shift();
  nr = Number(nr);

  for (let index = 0; index < nr; index++) {
    let message = input[index];

    let match = pattern.exec(message);

    if (match == null) {
      console.log("Valid message not found!");

    } else {
      let code1 = match[4].charCodeAt();
      let code2 = match[6].charCodeAt();
      let code3 = match[8].charCodeAt();
      
      console.log(`${match[2]}: ${code1} ${code2} ${code3}`);
    }
  }
}

// messageEncrypter (["3",
// "*Request*: [I]|[s]|[i]|",
// "*Taggy@: [73]|[73]|[73]|",
// "Should be valid @Taggy@: [v]|[a]|[l]|"])

messageEncrypter([
  "3",
  "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
  "*tAGged*: [i][i][i]|",
  "Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|",
]);
