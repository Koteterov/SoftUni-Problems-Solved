function playngCards(face, suit) {
  let faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (Object.keys(suits).includes(suit) == false) {
    throw new Error("Error");
  } else if (faces.includes(face) == false) {
    throw new Error("Error");
  }

  return {
    face,
    suit,
    toString() {
     return `${face}${suits[suit]}`;
    },
  };
}

console.log(playngCards("A", "S").toString());
console.log(playngCards("10", "H").toString());
// console.log(playngCards("1", "C").toString());

