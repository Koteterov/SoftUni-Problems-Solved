const { abort } = require("process");

class Hex {
  constructor(nr) {
    this.value = Number(nr);
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }
  plus(nr) {
    let result = this.value + Number(nr.value);
    return new Hex(result);
  }
  minus(nr) {
    let result = this.value - Number(nr.value);
    return new Hex(result);
  }
  parse(str) {
    return parseInt(str, 16);
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));

