const library = require("./library");
const { expect } = require("chai");


describe("checking library", () => {
    it("checking func calcPriceOfBook - correct input", () => {
        expect(library.calcPriceOfBook('test',1980)).to.equal('Price of test is 10.00');
        expect(library.calcPriceOfBook('test',1979)).to.equal('Price of test is 10.00');
        expect(library.calcPriceOfBook('test',1981)).to.equal('Price of test is 20.00');
        expect(library.calcPriceOfBook('test',1990)).to.equal('Price of test is 20.00');

      });
    it("checking func calcPriceOfBook - incorrect input", () => {
        expect(() => library.calcPriceOfBook(10,1980)).to.throw();
        expect(() => library.calcPriceOfBook('test','1980')).to.throw();
        expect(() => library.calcPriceOfBook('test')).to.throw();
        expect(() => library.calcPriceOfBook()).to.throw();
      });

    it("checking func findBook - books available", () => {
        expect(library.findBook(['a','b','c'],'a')).to.equal('We found the book you want.');
        expect(library.findBook(['a','b','c'],'d')).to.equal('The book you are looking for is not here!');
      });
    it("checking func findBook - no books", () => {
        expect(() => library.findBook([],'a')).to.throw();
      });

    it("checking func arrangeTheBooks - correct input", () => {
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(1)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
      });
    it("checking func arrangeTheBooks - correct input", () => {
        expect(() => library.arrangeTheBooks('test')).to.throw()
        expect(() => library.arrangeTheBooks(-1)).to.throw()
      });

});