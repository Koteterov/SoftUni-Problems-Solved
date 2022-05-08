function cars(input) {
  let result = {};

  let instructions = {
    create: (objName, inherits, parentName) => {
      if (inherits) {
        return (result[objName] = Object.create(result[parentName]));
      }
      return (result[objName] = {});
      //   return (result[objName] = inherits
      //     ? Object.create(result[parentName])
      //     : {});
    },
    set: (objName, key, value) => {
      return (result[objName][key] = value);
    },
    print: (objName) => {
      let res = [];
      for (const key in result[objName]) {
        res.push(`${key}:${result[objName][key]}`);
      }
      console.log(res.join(","));
    },
  };
  input.forEach((x) => {
    let [command, objName, key, value] = x.split(" ");
    instructions[command](objName, key, value);
  });
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
