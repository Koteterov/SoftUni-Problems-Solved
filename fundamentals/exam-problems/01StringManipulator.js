function string(input) {
  let text = input.shift();

  while (input[0] != "End") {
    let line = input.shift().split(" ");
    let command = line[0];
    if (command == "Translate") {
      trans(line);
      console.log(text);
    } else if (command == "Includes") {
      console.log(incl(line));
    } else if (command == "Start") {
      console.log(start(line));
    } else if (command == "Lowercase") {
      lower(line);
      console.log(text);
    } else if (command == "FindIndex") {
      console.log(find(line));
    } else if (command == "Remove") {
      remove(line);
      console.log(text);
    }
  }

  function trans(line) {
    let [_, char, replace] = line;
    return (text = text.split(char).join(replace));
  }
  function incl(line) {
    let str = line[1];
    if (text.includes(str)) {
      return "True";
    } else {
      return "False";
    }
  }
  function start(line) {
    let substr = line[1];
    let substrText = text.slice(0, substr.length);

    if (substr == substrText) {
      return "True";
    } else {
      return "False";
    }
  }
  function lower(line) {
    return (text = text.toLowerCase());
  }
  function find(line) {
    let char = line[1];
    return text.lastIndexOf(char);
  }
  function remove(line) {
    let [_, start, count] = line;
    start = Number(start);
    count = Number(count);
    let left = text.slice(0, start);
    let right = text.slice(start + count);
    let toSlice = text.slice(start, count);
    toSlice = "";

    return (text = left + toSlice + right);
  }
}

string([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);

// string((["*S0ftUni is the B3St Plac3**",
// "Translate 2 o",
// "Includes best",
// "Start the",
// "Lowercase",
// "FindIndex p",
// "Remove 2 7",
// "End"])
// )
