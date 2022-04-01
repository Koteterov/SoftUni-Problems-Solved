function mirrorWords(input) {
  
    let pattern = /([@#])([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g
  
    let match = pattern.exec(input);
    if (match == null) {
      console.log(`No word pairs found!\nNo mirror words!`);

    } else {
      let result = [];
      let count = 0;
  
      while (match != null) {
        count++;
  
        let reversed = match[2].split("").reverse().join("");

        if (reversed == match[3]) {
          result.push(`${match[2]} <=> ${reversed}`);
        }
        match = pattern.exec(input);
      }
      console.log(`${count} word pairs found!`);

      if (result.length == 0) {
        console.log("No mirror words!");
      } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
      }
    }
  }
  
  mirrorWords([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
  ]);
  
//   mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
  
//   mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
  

