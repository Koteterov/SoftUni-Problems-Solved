const lookupChar = require("./03.Char Lookup");
const { expect } = require("chai");

describe("retrieving a character at a given index", () => {
  it("checking that it is not a string -> 2", () => {
    expect(lookupChar(2,2)).to.equal(undefined);
  });
  it("checking that it is not a string -> []", () => {
    expect(lookupChar([],2)).to.equal(undefined);
  });
  it("checking that it is not a string -> {}", () => {
    expect(lookupChar({},2)).to.equal(undefined);
  });
  it("checking that it is not a string -> null", () => {
    expect(lookupChar(null,2)).to.equal(undefined);
  });
  it("checking that index is not an integer -> 0.1", () => {
    expect(lookupChar('test', 0.1)).to.equal(undefined);
  });
  it("checking that index is not an integer -> '1'", () => {
    expect(lookupChar('test', '1')).to.equal(undefined);
  });
  it("checking incorrect index - <= string.length", () => {
    expect(lookupChar("test", 4)).to.equal("Incorrect index");
    expect(lookupChar("test", 5)).to.equal("Incorrect index");
  });
  it("checking incorrect index - index < 0", () => {
    expect(lookupChar("test", -1)).to.equal("Incorrect index");
  });
  it("checking incorrect index", () => {
    expect(lookupChar("", 0)).to.equal("Incorrect index");
  });
  it("checking correct index", () => {
    expect(lookupChar("test", 1)).to.equal("e");
  });
});
