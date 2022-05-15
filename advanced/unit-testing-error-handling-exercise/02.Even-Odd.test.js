const isOddOrEven = require("./02.Even-Odd");
const { assert, expect } = require("chai");

describe("Test for even or odd func", () => {
  it("should return undefined for num", () => {
    expect(isOddOrEven(20)).to.equal(undefined);
  });
  it("should return undefined for []", () => {
    expect(isOddOrEven([])).to.equal(undefined);
  });
  it("should return undefined for {}", () => {
    expect(isOddOrEven({})).to.equal(undefined);
  });
  it("should return even for 'hate'", () => {
    expect(isOddOrEven("hate")).to.equal("even");
  });
  it("should return odd for 'eat' ", () => {
    expect(isOddOrEven("eat")).to.equal("odd");
  });
  it("should return even for empty str", () => {
    expect(isOddOrEven("")).to.equal("even");
  });
});
