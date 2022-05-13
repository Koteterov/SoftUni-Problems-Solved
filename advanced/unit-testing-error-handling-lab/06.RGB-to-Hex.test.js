const rgbToHexColor = require("./06.RGB-to-Hex");
const expect = require("chai").expect;

describe("if it is a valid RGB color - red, green, blue", () => {
  it("RGB red < 0", () => {
    expect(rgbToHexColor(-1, 20, 30)).to.equal(undefined);
  });
  it("RGB green < 0", () => {
    expect(rgbToHexColor(20, -1, 30)).to.equal(undefined);
  });
  it("RGB blue < 0", () => {
    expect(rgbToHexColor(20, 20, -1)).to.equal(undefined);
  });
  it("RGB red > 255", () => {
    expect(rgbToHexColor(256, 20, 30)).to.equal(undefined);
  });
  it("RGB green > 255", () => {
    expect(rgbToHexColor(20, 256, 30)).to.equal(undefined);
  });
  it("RGB blue > 255", () => {
    expect(rgbToHexColor(20, 20, 256)).to.equal(undefined);
  });
  it("RGB black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
  it("RGB white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });
  it("valid color", () => {
    expect(rgbToHexColor(25, 55, 45)).to.equal("#19372D");
  });
  it("invalid input red", () => {
    expect(rgbToHexColor("sth", 55, 45)).to.equal(undefined);
  });
  it("invalid input green", () => {
    expect(rgbToHexColor(25, "sth", 45)).to.equal(undefined);
  });
  it("invalid input blue", () => {
    expect(rgbToHexColor(25, 55, "sth")).to.equal(undefined);
  });
});
