const bookSelection = require('./bookSelection')
const { expect } = require("chai");

describe("Tests bookSelection", function() {

    describe("Tests isGenreSuitable func", function() {
        it("should NOT be suitable", function() {
          expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal("Books with Thriller genre are not suitable for kids at 12 age");
          expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal("Books with Thriller genre are not suitable for kids at 11 age");
          expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal("Books with Horror genre are not suitable for kids at 12 age");
          expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal("Books with Horror genre are not suitable for kids at 11 age");
        });
        it("should be suitable", function() {
          expect(bookSelection.isGenreSuitable('Test', 11)).to.equal("Those books are suitable");
          expect(bookSelection.isGenreSuitable('Test', 12)).to.equal("Those books are suitable");
          expect(bookSelection.isGenreSuitable('Test', 13)).to.equal("Those books are suitable");
        });
     });

    describe("Tests isItAffordable func", function() {
        it("should validate input - price & budget are NOT nums", function() {
          expect(() => bookSelection.isItAffordable('test',50)).to.throw();
          expect(() => bookSelection.isItAffordable(5,'test')).to.throw();
          expect(() => bookSelection.isItAffordable(5)).to.throw();
          expect(() => bookSelection.isItAffordable()).to.throw();
        });
        it("not enough money", function() {
          expect(bookSelection.isItAffordable(20,19)).to.equal("You don't have enough money");
          expect(bookSelection.isItAffordable(20,1)).to.equal("You don't have enough money");
          expect(bookSelection.isItAffordable(20,0)).to.equal("You don't have enough money");
  
        });
        it("money is OK", function() {
          expect(bookSelection.isItAffordable(20,20)).to.equal("Book bought. You have 0$ left");
          expect(bookSelection.isItAffordable(20,25)).to.equal("Book bought. You have 5$ left");
          expect(bookSelection.isItAffordable(0,1)).to.equal("Book bought. You have 1$ left");
        });
     });
    describe("Tests suitableTitles func", function() {
        it("should return book titles", function() {
          expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],'Thriller')).to.deep.equal(['The Da Vinci Code']);
        });
        it("should throw error", function() {
          expect(() => bookSelection.suitableTitles({ title: "The Da Vinci Code", genre: "Thriller" },'Thriller')).to.throw();
          expect(() => bookSelection.suitableTitles({ title: "The Da Vinci Code", genre: "Thriller" },['Thriller'])).to.throw();
        });
     });
  });
  