function deckOfCards(cards) {
    function createCard(face,suit) {
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

  let validCards = [];

  for (const currCard of cards) {
    try {
      let suit = currCard.slice(-1);
      let face = currCard.slice(0, currCard.length - 1);

      let card = createCard(face, suit);
      validCards.push(card);

    } catch (error) {
      console.log(`Invalid card: ${currCard}`);
      return;
    }
  }
  return validCards.join(" ");
}

console.log(deckOfCards(["AS", "10D", "KH", "2C"]));
console.log(deckOfCards(["5S", "3D", "QD", "1C"]));



