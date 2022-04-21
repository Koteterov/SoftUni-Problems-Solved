function heroicInventory(input) {
    let result = [];
  
    for (const data of input) {
      let [name, level, itemData] = data.split(" / ");
      level = Number(level);
      let items = itemData == undefined ? [] : itemData.split(", ");
      result.push({ name, level, items });
    }
  
    console.log(JSON.stringify(result));
  }
  
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ]);
    