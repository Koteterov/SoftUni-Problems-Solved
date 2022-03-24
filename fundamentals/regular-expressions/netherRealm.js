function netherRealms(input) {
  let tokens = input.split(/[, ]+/g);

  let patternHealth = /[^\+\-\*\/\.\d+]/g;
  let patternDamage = /-*\d+(\.\d+)*/g;
  let patternMultDiv = /[\*\/]/g;
  let demons = {};

  for (let demon of tokens) {
    let health = 0;
    let damage = 0;
    demons[demon] = {
      health,
      damage,
    };

    let matchHealth = demon.match(patternHealth).join("");
    health = matchHealth
      .split("")
      .map((x) => x.charCodeAt())
      .reduce((acc, el) => acc + el);
    demons[demon].health += health;

    let matchDamage = demon.match(patternDamage);
    let matchMultAndDiv = demon.match(patternMultDiv);

    if (matchDamage != null) {
      damage = matchDamage.map(Number).reduce((acc, el) => acc + el);
    }
    if (matchMultAndDiv != null) {
      matchMultAndDiv.forEach((x) => {
        if (x == "*") {
          damage *= 2;
        } else if (x == "/") {
          damage /= 2;
        }
      });
    }
    demons[demon].damage += damage;
  }
  let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
  for (const [key, value] of sorted) {
    console.log(
      `${key} - ${value.health} health, ${value.damage.toFixed(2)} damage`
    );
  }
}
netherRealms("M3ph1st0**, Azazel");
// netherRealms('M3ph-0.5s-0.5t0.0**')
// netherRealms("Gos/ho");




  // Another one not mine

  function netherRealms1(str) {
    let names = str.split(",").map((x) => x.trim());
    let rgxHealth = /[^\+\-\*\/\.\,0-9 ]/g;
    let rgxDigits = /-*\d+(\.\d+)*/g;
    let rgxMultipliers = /[\*/]/g;
    let list = {};

    for (let name of names) {
      let healthChars = name.match(rgxHealth);
      list[name] = [];
      let health = 0;

      if (healthChars) {
        healthChars.map((a) => (health += a.charCodeAt(0)));
      }
      list[name].push(health);

      //--------------------damage

      let sum = 0;
      let digits = name.match(rgxDigits);
      let multipliers = name.match(rgxMultipliers);

      if (digits) {
        digits.map((x) => (sum += Number(x)));
      }

      if (multipliers) {
        for (let sign of multipliers) {
          if (sign == "/") {
            sum = sum / 2;
          } else {
            sum = sum * 2;
          }
        }
      }

      list[name].push(sum.toFixed(2));
    }

    let entries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, [health, damage]] of entries) {
      console.log(`${name} - ${health} health, ${damage} damage`);
    }
  }

//   // netherRealms1('M3ph-0.5s-0.5t0.0**')

