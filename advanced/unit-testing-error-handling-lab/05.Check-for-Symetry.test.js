const isSymmetric = require('./05.Check-for-Symetry')
const expect = require('chai').expect


describe("symentrical array", () => {
    it("not correct type", () => {
      expect(isSymmetric('a')).to.equal(false);
    });
    it("not correct type", () => {
        expect(isSymmetric(2)).to.equal(false);
    });
    it("is symentrical nr", () => {
        expect(isSymmetric([1,2,1])).to.equal(true);
    });
    it("is symentrical str", () => {
        expect(isSymmetric(['a','b','a'])).to.equal(true);
    });
    it("is symentrical", () => {
        expect(isSymmetric([2,2])).to.equal(true);
    });
    it("is symentrical str", () => {
        expect(isSymmetric(['a','a'])).to.equal(true);
    });
    it("not symentrical of the same type nr", () => {
        expect(isSymmetric([1,2,3])).to.equal(false);
    });
    it("not symentrical of the same type str", () => {
        expect(isSymmetric(['a','b','c'])).to.equal(false);
    });
    it("not symentrical of diff types", () => {
        expect(isSymmetric([1,2,'1'])).to.equal(false);
    });
});
