function inventry(input) {
  let list = input.shift().split(", ");
  input.pop();
  let items = input;

  for (const tokens of items) {
    let [command, item] = tokens.split(" - ");


    if (command == "Collect") {
      if (!list.includes(item)) {
        list.push(item);
      }
    } else if (command == "Drop") {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
      }
    } else if (command == "Combine Items") {
      let splittedItems = item.split(":");
      let oldItem = splittedItems[0];
      let newItem = splittedItems[1];
      if (list.includes(oldItem)) {
        list.splice(list.indexOf(oldItem) + 1, 0, newItem);
      }
    } else if (command == "Renew") {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        list.splice(list.length, 0, item);
      }
    }
  }
  console.log(list.join(', '));
}

inventry(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventry([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
