const testNumbers = require("./03.Test-Numbers");
const { expect } = require("chai");

describe("Tests func testNumbers", function () {
  describe("Tests sumNumbers", function () {
    it("should return undefined for != 'number", function () {
      expect(testNumbers.sumNumbers(2, "5")).to.equal(undefined);
      expect(testNumbers.sumNumbers("2", 5)).to.equal(undefined);
      expect(testNumbers.sumNumbers([1, 2], 5)).to.equal(undefined);
      expect(testNumbers.sumNumbers(2, [1, 2])).to.equal(undefined);
    });
    it("should return undefined for only one param", function () {
      expect(testNumbers.sumNumbers(2)).to.equal(undefined);
    });
    it("should return correct sum for valid params", function () {
      expect(testNumbers.sumNumbers(1.556, 3)).to.equal("4.56");
      expect(testNumbers.sumNumbers(2, 3)).to.equal("5.00");
      expect(testNumbers.sumNumbers(2.1, 3.2)).to.equal("5.30");
      expect(testNumbers.sumNumbers(-2, 5)).to.equal("3.00");
    });
  });
  describe("Tests numberChecker", function () {
    it("should throw Error for NaN", function () {
      expect(() => testNumbers.numberChecker("test")).to.throw();
    });
    it("OK for even num", function () {
      expect(testNumbers.numberChecker(4)).to.contain("even");
    });
    it("OK for even num", function () {
      expect(testNumbers.numberChecker(0)).to.contain("even");
    });
    it("OK for odd num", function () {
      expect(testNumbers.numberChecker(3)).to.contain("odd");
    });
  });
  describe("Tests averageSumArray", function () {
    it("should return 5 for [4,6]", function () {
      expect(testNumbers.averageSumArray([4, 6])).to.equal(5);
    });
  });
});
