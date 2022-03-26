function hardWords(input) {
    let letter = input[0];
    let words = input[1];
  
    for (const word of words) {
  
      for (let i = 0; i < letter.length; i++) {
        const element = letter[i];
  
        let count = 0;
        let start = 0;
  
        if (element == "_") {
          count++;
          start = i;
          while (letter[++i] == "_") {
            count++;
            
          }
          if (count == word.length) {
            letter =
              letter.substring(0, start) +
              word +
              letter.substring(start + word.length);
            i = 0;
          }
        }
      }
    }
    console.log(letter);
  }
  
  hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
  ]);
  


// with regexp:
function hardWords1(input) {
  let letter = input[0];
  let words = input[1];
  let pattern = /\b_+\b/g;

  let match = pattern.exec(letter);
  while (match != null) {
    words.forEach((w) => {
      if (match[0].length == w.length) {
        letter = letter.replace(match[0], w);
      }
    });

    match = pattern.exec(letter);
  }

  console.log(letter);
}

// hardWords1([
//   "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
//   ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
// ]);
