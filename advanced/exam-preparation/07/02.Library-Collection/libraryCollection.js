
class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    this.books.push({ bookName, bookAuthor, payed: false });
    this.capacity--;
    if (this.capacity < 0) {
      throw Error("Not enough space in the collection.");
    }
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    let found = this.books.find((b) => b.bookName == bookName);

    if (!found) {
      throw Error(`"${bookName} is not in the collection.`);
    }
    if (found.payed == true) {
      throw Error(`${bookName} has already been paid.`);
    }
    found.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    let found = this.books.find((b) => b.bookName == bookName);

    if (!found) {
      throw Error(`The book, you're looking for, is not found.`);
    }

    if (found.payed == false) {
      throw Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books = this.books.filter((b) => b.bookName != bookName);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    if (bookAuthor) {
      let foundAuthor = this.books.find((b) => b.bookAuthor == bookAuthor);
      if (!foundAuthor) {
        throw Error(`${bookAuthor} is not in the collection.`);
      }
      return `${foundAuthor.bookName} == ${foundAuthor.bookAuthor} - ${foundAuthor.payed ? 'Has Paid' : 'Not Paid' }.`
    }

    let result = [`The book collection has ${this.capacity} empty spots left.`];
    this.books
      .sort((a, b) => a.bookName.localeCompare(b.bookName))
      .forEach((b) => {
        result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid' }.`);
      });

    return result.join("\n");
  }
}

const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());


