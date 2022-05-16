const mathEnforcer = require("./04.Math-Enforcer");
const { expect } = require("chai");

describe("testing mathEnforcer", () => {
  describe("func addFive", () => {
    it('should return undefined for "1"', () => {
      expect(mathEnforcer.addFive("1")).to.equal(undefined);
    });
    it("should return undefined for []", () => {
      expect(mathEnforcer.addFive([])).to.equal(undefined);
    });
    it("should return undefined for {}", () => {
      expect(mathEnforcer.addFive({})).to.equal(undefined);
    });
    it("should return undefined for null", () => {
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
    });
    it("should return 6 for 1", () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
    });
    it("should return 5 for -1", () => {
      expect(mathEnforcer.addFive(-1)).to.equal(4);
    });
    it("should return 5 for 0", () => {
      expect(mathEnforcer.addFive(0)).to.equal(5);
    });
    it("should return 6.1 for 1.1", () => {
      expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
    });
    it("should return 3.9 for -1.1", () => {
      expect(mathEnforcer.addFive(-1.1)).to.be.closeTo(3.9, 0.01);
    });
  });

  describe("func subtractTen", () => {
    it('should return undefined for "1"', () => {
      expect(mathEnforcer.subtractTen("1")).to.equal(undefined);
    });
    it("should return -9 for 1", () => {
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
    });
    it("should return -11 for -1", () => {
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
    });
    it("should return -10 for 0", () => {
      expect(mathEnforcer.subtractTen(0)).to.equal(-10);
    });
    it("should return -8.9 for 1.1", () => {
      expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.01);
    });
    it("should return -11.1 for -1.1", () => {
      expect(mathEnforcer.subtractTen(-1.1)).to.be.closeTo(-11.1, 0.01);
    });
  });

  describe("func sum", () => {
    it('should return undefined for(1, "1")', () => {
      expect(mathEnforcer.sum(1, "1")).to.equal(undefined);
    });
    it('should return undefined for("1", 1)', () => {
      expect(mathEnforcer.sum("1", 1)).to.equal(undefined);
    });
    it("should return undefined for(1)", () => {
      expect(mathEnforcer.sum(1)).to.equal(undefined);
    });
    it("should return 2 for(2, 0)", () => {
      expect(mathEnforcer.sum(2, 0)).to.equal(2);
    });
    it("should return -1 for(2, -3)", () => {
      expect(mathEnforcer.sum(2, -3)).to.equal(-1);
    });
    it("should return -5 for(-2, -3)", () => {
      expect(mathEnforcer.sum(-2, -3)).to.equal(-5);
    });
    it("should return 3.1 for(1.1, 2)", () => {
      expect(mathEnforcer.sum(1.1, 2)).to.be.closeTo(3.1, 0.01);
    });
    it("should return -3.6 for(-2.1, -1.5)", () => {
      expect(mathEnforcer.sum(-2.1, -1.5)).to.be.closeTo(-3.6, 0.01);
    });
  });
});
