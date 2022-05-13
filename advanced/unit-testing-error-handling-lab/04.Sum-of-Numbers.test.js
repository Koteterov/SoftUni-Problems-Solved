const sum = require("./04.Sum-of-Numbers");
const expect = require("chai").expect;

describe("sum of numbers", () => {
  it("should return 20 for [2,4,6,8]", () => {
    expect(sum([2, 4, 6, 8])).to.equal(20);
  });
  it("should return 5 for [2,3]", () => {
    expect(sum([2, 3])).to.equal(5);
  });

  it("should return 1 for [1]", () => {
    expect(sum([1])).to.equal(1);
  });
  it("should return 0 for []", () => {
    expect(sum([])).to.equal(0);
  });
  it("should reurn NaN for ['apple',2,3]", () => {
    let actual = sum(["apple", 2, 3]);
    expect(actual).to.be.NaN;
  });
});
