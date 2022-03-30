function tour(input) {
  let destination = input.shift();

  while (input[0] != "Travel") {
    let line = input.shift().split(":");
    let command = line[0];

    if (command == "Add Stop") {
      add(line);
      console.log(destination);
    } else if (command == "Remove Stop") {
      remove(line);
      console.log(destination);
    } else if (command == "Switch") {
      change(line);
      console.log(destination);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${destination}`);

  function add(line) {
    let [_, index, string] = line;
    index = Number(index);
    if (valid(index, destination)) {
      let left = destination.slice(0, index);
      let right = destination.slice(index);
      destination = left + string + right;
    }
  }
  function remove(line) {
    let [_, start, end] = line;
    start = Number(start);
    end = Number(end);

    if (valid(start, destination) && valid(end, destination)) {
      let left = destination.slice(0, start);
      let right = destination.slice(end + 1);
      destination = left + right;
    }
  }
  function change(line) {
    let [_, oldStr, newStr] = line;
    destination = destination.split(oldStr).join(newStr);
  }
  function valid(index, str) {
    return index >= 0 && index < str.length;
  }
}

tour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

// ===================================
//  OR:

function worldTour(input) {
  let text = input.shift();

  let actions = { 
      "Add Stop": add,
      "Remove Stop": remove,
      "Switch": change

  }

  while (input[0] != "Travel") {
    let [command, param1, param2] = input.shift().split(":");
      let action = actions[command]
      action(param1,param2)
      console.log(text);

  //   if (command == "Add Stop") {
  //     add(param1, param2);
  //     console.log(text);
  //   } else if (command == "Remove Stop") {
  //     remove(param1, param2);
  //     console.log(text);
  //   } else if (command == "Switch") {
  //     change(param1, param2);
  //     console.log(text);
  //   }
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);

  function add(index, str) {
    index = Number(index);
    if (isValid(index)) {
      let first = text.slice(0, index);
      let second = text.slice(index);
      text = first + str + second;
    }
  }

  function remove(start, end) {
    start = Number(start);
    end = Number(end);
    if (isValid(start) && isValid(end)) {
      let first = text.slice(0, start);
      let second = text.slice(end + 1);
      text = first + second;
    }
  }

  function change(a, b) {
    let pattern = new RegExp(a, "g");
    text = text.replace(pattern, b);
  }

  function isValid(index) {
    return index >= 0 && index < text.length;
  }
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
