const cinema = require("./03.Cinema");
const { expect } = require("chai");

describe("Tests func Cinema", function () {
  describe("showMovies", function () {
    it("should return 'no movies' for .length == 0", function () {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });
    it("should return 'no movies' for .length == 0 - empty string", function () {
      expect(cinema.showMovies([""])).to.equal("");
    });
    it("should return string - joined..", function () {
      expect(
        cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
      ).to.equal("King Kong, The Tomorrow War, Joker");
    });
    it("should return string - one el in array", function () {
      expect(cinema.showMovies(["King Kong"])).to.equal("King Kong");
    });
  });
  describe("ticketPrice", function () {
    it("OK with correct input", function () {
      expect(cinema.ticketPrice("Premiere")).to.equal(12.0);
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
      expect(() => cinema.ticketPrice("Discount")).not.to.throw();
    });
    it("with incorrect input", function () {
      expect(() => cinema.ticketPrice("test")).to.throw();
      expect(() => cinema.ticketPrice(2)).to.throw();
    });
  });
  describe("swapSeatsInHall", function () {
    it("Incorrect input, only one param", function () {
      expect(cinema.swapSeatsInHall(15)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(15, 15)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Incorrect input, params must be integers", function () {
      expect(cinema.swapSeatsInHall(1.5, 15)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(15, 1.5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall("test", 15)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(15, "test")).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Incorrect input, params must be > 0", function () {
      expect(cinema.swapSeatsInHall(-1, 15)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(15, -1)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(0, 15)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(15, 0)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Incorrect input, both params must be < 20", function () {
      expect(cinema.swapSeatsInHall(2, 22)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(21, 2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("Correct input", function () {
      expect(cinema.swapSeatsInHall(1, 15)).to.equal(
        "Successful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, 20)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
