function legendaryFarming(input) {
  let data = input.split(" ");
  let items = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  let junk = {};

  for (let i = 0; i < data.length; i += 2) {
    let quantity = Number(data[i]);
    let material = data[i + 1];
    material = material.toLowerCase();
    if (material == "shards") {
      items.shards += quantity;

      if (items.shards >= 250) {
        items.shards -= 250;
        console.log(`Shadowmourne obtained!`);
        break;
      }
    } else if (material == "fragments") {
      items.fragments += quantity;

      if (items.fragments >= 250) {
        items.fragments -= 250;
        console.log(`Valanyr obtained!`);
        break;
      }
    } else if (material == "motes") {
      items.motes += quantity;

      if (items.motes >= 250) {
        items.motes -= 250;
        console.log(`Dragonwrath obtained!`);
        break;
      }
    } else {
      if (junk.hasOwnProperty(material) == false) {
        junk[material] = 0;
      }
      junk[material] += quantity;
    }
  }
  
  Object.entries(items)
    .sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    })
    .forEach((m) => {
      console.log(`${m[0]}: ${m[1]}`);
    });

  Object.entries(junk)
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    })
    .forEach((j) => {
      console.log(`${j[0]}: ${j[1]}`);
    });
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
// legendaryFarming(
//   "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
// );
