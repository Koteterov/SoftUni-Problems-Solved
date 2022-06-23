const { expect } = require("chai");
const rentCar = require("./rentCar");

describe("checking rentCar", () => {
  it("checking func searchCar - correct input", () => {
    expect(rentCar.searchCar(["a", "b", "c"], "a")).to.equal(
      `There is 1 car of model a in the catalog!`
    );
    expect(rentCar.searchCar(["a", "a", "c"], "a")).to.equal(
      `There is 2 car of model a in the catalog!`
    );
  });
  it("checking func searchCar - no car", () => {
    expect(() => rentCar.searchCar(["a", "b", "c"], "d")).to.throw(
      "There are no such models in the catalog!"
    );
  });
  it("checking func searchCar - incorrect input", () => {
    expect(() => rentCar.searchCar("a", "d")).to.throw("Invalid input!");
    expect(() => rentCar.searchCar({}, "d")).to.throw("Invalid input!");
    expect(() => rentCar.searchCar(2, "d")).to.throw("Invalid input!");
    expect(() => rentCar.searchCar("a")).to.throw("Invalid input!");
    expect(() => rentCar.searchCar()).to.throw("Invalid input!");
    expect(() => rentCar.searchCar(["a", "b"], 1)).to.throw("Invalid input!");
    expect(() => rentCar.searchCar(["a", "b"], [])).to.throw("Invalid input!");
    expect(() => rentCar.searchCar(["a", "b"], {})).to.throw("Invalid input!");
  });

  it("checking func calculatePriceOfCar - correct input", () => {
    expect(rentCar.calculatePriceOfCar("Volkswagen", 10)).to.equal(
      "You choose Volkswagen and it will cost $200!"
    );
    expect(rentCar.calculatePriceOfCar("Volkswagen", 1)).to.equal(
      "You choose Volkswagen and it will cost $20!"
    );
    expect(rentCar.calculatePriceOfCar("Volkswagen", 0)).to.equal(
      "You choose Volkswagen and it will cost $0!"
    );
    expect(rentCar.calculatePriceOfCar("Volkswagen", -1)).to.equal(
      "You choose Volkswagen and it will cost $-20!"
    );
  });
  it("checking func calculatePriceOfCar - no car", () => {
    expect(() => rentCar.calculatePriceOfCar("a", 10)).to.throw(
      "No such model in the catalog!"
    );
  });
  it("checking func calculatePriceOfCar - incorrect input", () => {
    expect(() => rentCar.calculatePriceOfCar(10, 10)).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar([], 10)).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar({}, 10)).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(10)).to.throw("Invalid input!");
    expect(() => rentCar.calculatePriceOfCar()).to.throw("Invalid input!");
    expect(() => rentCar.calculatePriceOfCar("Volkswagen")).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("Volkswagen", 1.5)).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("Volkswagen", "test")).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("Volkswagen", [])).to.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("Volkswagen", {})).to.throw(
      "Invalid input!"
    );
  });

  it("checking func checkBudget - correct input", () => {
    expect(rentCar.checkBudget(10, 2, 20)).to.equal(`You rent a car!`);
    expect(rentCar.checkBudget(10, 1, 10)).to.equal(`You rent a car!`);
    expect(rentCar.checkBudget(10, 0, 0)).to.equal(`You rent a car!`);
  });
  it("checking func checkBudget - budget not enough", () => {
    expect(rentCar.checkBudget(20, 2, 20)).to.equal(
      `You need a bigger budget!`
    );
    expect(rentCar.checkBudget(10, 1, 9)).to.equal(`You need a bigger budget!`);
  });

  it("checking func checkBudget - incorrect input", () => {
    expect(() => rentCar.checkBudget("20", 2, 40)).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget(20, "2", 40)).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget(20, 2, "40")).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget(1.5, 2, 40)).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget(1, 2.5, 40)).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget(1, 40)).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget(1)).to.throw(`Invalid input!`);
    expect(() => rentCar.checkBudget()).to.throw(`Invalid input!`);
  });
});
