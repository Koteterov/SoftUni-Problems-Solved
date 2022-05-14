const createCalculator = require("./07.Add-Subtract");
const expect = require("chai").expect;

describe("checking module object, containing functions", function () {
  it("should return an object", function () {
    expect(typeof createCalculator()).to.equal("object");
  });
  it("add / subtract functionality with positive nums", function () {
    let calculator = createCalculator();
    calculator.add(10);
    calculator.subtract("1");
    expect(calculator.get()).to.equal(9);
  });
  it("add / subtract functionality with negative nums", function () {
    let calculator = createCalculator();
    calculator.add("-10");
    calculator.subtract(1);
    expect(calculator.get()).to.equal(-11);
  });
});

