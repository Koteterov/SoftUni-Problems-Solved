const dealership = require('./dealership')
const { expect } = require("chai");

describe("Tests for dealership obj functionality", function () {
    describe("newCarCost func", function () {
      it("returning an old car", () => {
        expect(dealership.newCarCost("Audi A4 B8", 50000)).to.equal(35000);
      });
      it("not returning an old car", () => {
        expect(dealership.newCarCost("test", 50000)).to.equal(50000);
      });
    });
    describe("carEquipment func", function () {
      it("should return selected extras", () => {
        expect(dealership.carEquipment(["a", "b", "c"], [1, 2])).to.deep.equal(["b","c",]);
      });
    });
    describe("euroCategory func", function () {
      it("should return discount", () => {
        expect(dealership.euroCategory(4)).to.equal(
          "We have added 5% discount to the final price: 14250."
        );
        expect(dealership.euroCategory(5)).to.equal(
          "We have added 5% discount to the final price: 14250."
        );
      });
      it("should not return discount", () => {
        expect(dealership.euroCategory(0)).to.equal(
          "Your euro category is low, so there is no discount from the final price!"
        );
        expect(dealership.euroCategory(1)).to.equal(
          "Your euro category is low, so there is no discount from the final price!"
        );
        expect(dealership.euroCategory(3)).to.equal(
          "Your euro category is low, so there is no discount from the final price!"
        );
      });
    });
  });
  