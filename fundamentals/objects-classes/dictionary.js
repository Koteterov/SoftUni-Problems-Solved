function dict(input) {
    let res = {};
  
    // for (let data of input) {
    //   let [, key, , value] = data.split('"');
  
    //   res[key] = value;
    // }
    for (let data of input) {
      data = JSON.parse(data);
      for (let key in data) {
        res[key] = data[key];
      }
    }
  
    let sorted = Object.entries(res).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });
  
    for (let data of sorted) {
      console.log(`Term: ${data[0]} => Definition: ${data[1]}`);
    }
  }
  
  dict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}',
    '{"Bus":"1111111111111111111111111111111111"}',
    '{"A":"zzzzz"}',
    '{"Data":"222"}',
  ]);
  