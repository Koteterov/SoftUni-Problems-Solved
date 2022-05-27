const PaymentPackage = require("./12.Payment-Package");
const { expect } = require("chai");

describe("Tests for Class PaymentPackage", () => {
  describe("Testing the Name", () => {
    it("Constructor", () => {
      let inst = new PaymentPackage("Test", 100);
      expect(inst.name).to.equal("Test");
      expect(inst.value).to.equal(100);
      expect(inst.VAT).to.equal(20);
      expect(inst.active).to.equal(true);
    });
    it("should throw an error - Name is a number", () => {
      expect(() => new PaymentPackage(100, 100)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it("should throw an error - Name is an array", () => {
      expect(() => new PaymentPackage([], 100)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it("should throw an error - Name is an object", () => {
      expect(() => new PaymentPackage({}, 100)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it("should throw an error - Name is an empty string", () => {
      expect(() => new PaymentPackage("", 100)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it("should NOT throw an error - Name is OK", () => {
      expect(() => new PaymentPackage("Test", 100)).not.to.throw(
        "Name must be a non-empty string"
      );
    });
  });
  describe("Testing the Value", () => {
    it("should throw an error - Value is a string", () => {
      expect(() => new PaymentPackage("Test", "100")).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("should throw an error - Value is an array", () => {
      expect(() => new PaymentPackage("Test", [100])).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("should throw an error - Value is an object", () => {
      expect(() => new PaymentPackage("Test", {})).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("should throw an error - Value is negative", () => {
      expect(() => new PaymentPackage("Test", -100)).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("should NOT throw an error - Value OK", () => {
      expect(() => new PaymentPackage("Test", 100)).not.to.throw(
        "Value must be a non-negative number"
      );
    });
    it("should NOT throw an error for null - Value = 0", () => {
      expect(() => new PaymentPackage("Test", 0)).not.to.throw(
        "Value must be a non-negative number"
      );
    });
  });
  describe("Testing the VAT", () => {
    it("Should throw errow - VAT is a string", () => {
      let test = new PaymentPackage("Test", 100);
      expect(() => (test.VAT = "test")).to.throw(
        "VAT must be a non-negative number"
      );
    });
    it("Should throw errow - VAT is an array", () => {
      let test = new PaymentPackage("Test", 100);
      expect(() => (test.VAT = [1, 2, 3])).to.throw(
        "VAT must be a non-negative number"
      );
    });
    it("Should throw errow - VAT is negatrive", () => {
      let test = new PaymentPackage("Test", 100);
      expect(() => (test.VAT = -20)).to.throw(
        "VAT must be a non-negative number"
      );
    });
    it("Should NOT throw errow - VAT OK", () => {
      let test = new PaymentPackage("Test", 100);
      expect(() => (test.VAT = 20)).not.to.throw(
        "VAT must be a non-negative number"
      );
    });
  });
  describe("Testing the Active", () => {
    it("Should throw errow - Active is a string", () => {
      let test = new PaymentPackage("test", 123);
      expect(() => (test.active = "test")).to.throw(
        "Active status must be a boolean"
      );
    });
    it("Should throw errow - Active is a number", () => {
      let test = new PaymentPackage("test", 123);
      expect(() => (test.active = 100)).to.throw(
        "Active status must be a boolean"
      );
    });

    it("Should throw errow - Active is an array", () => {
      let test = new PaymentPackage("test", 123);
      expect(() => (test.active = [])).to.throw(
        "Active status must be a boolean"
      );
    });
    it("Should NOT throw errow - Active OK", () => {
      let test = new PaymentPackage("test", 123);
      expect(() => (test.active = true)).not.to.throw(
        "Active status must be a boolean"
      );
    });
  });
  describe("Testing the toString Method", () => {
    it("Should return a string when the input is correct - VAT = 20", () => {
      let test = new PaymentPackage("Test", 100);
      let result = [
        "Package: Test",
        "- Value (excl. VAT): 100",
        "- Value (VAT 20%): 120",
      ];
      expect(test.toString()).to.equal(result.join("\n"));
    });
    it("Should return a string when the input is correct - VAT = 30", () => {
      let test = new PaymentPackage("Test", 100);
      test.VAT = 30;
      let result = [
        "Package: Test",
        "- Value (excl. VAT): 100",
        "- Value (VAT 30%): 130",
      ];
      expect(test.toString()).to.equal(result.join("\n"));
    });
    it("Should return a string when the input is correct - active = false", () => {
      let test = new PaymentPackage("Test", 100);
      test.active = false;
      let result = [
        "Package: Test (inactive)",
        "- Value (excl. VAT): 100",
        "- Value (VAT 20%): 120",
      ];
      expect(test.toString()).to.equal(result.join("\n"));
    });
  });
});

