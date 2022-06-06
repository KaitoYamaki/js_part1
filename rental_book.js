class Book {
  constructor(title, pageSize) {
    this.title = title;
    this.pageSize = pageSize;
  }

  getTitle() {
    return this.title;
  }

  setTitle(value) {
    this.title = value;
  }

  getPageSize() {
    return this.pageSize;
  }

  setPageSize(value) {
    this.pageSize = value;
  }
}

class Bookshelf {
  constructor() {
    this.books = [];
  }

  static valueOf(arrayOfHash) {
    let bookshelf = new this;

    for (let i = 0; i < arrayOfHash.length; i++) {
      let hash = arrayOfHash[i];
      let book = new Book(hash.title, hash.pageSize);
      bookshelf.addBook(book);
    }
    return bookshelf;
  }

  addBook(book) {
    if (!this.canAddBook(book)) return false;
    this.books.push(book);
    return true;
  }

  findBookByTitle(title) {
    for(let i = 0; i < this.books.length; i++) {
      if (this.books[i].getTitle() === title) return this.books[i];
    }
    return null;
  }

  sumPageSize() {
    let size = 0
    for(let i = 0; i < this.books.length; i++) {
      size += this.books[i].getPageSize();
    }
    return size;
  }

  size() {
    return this.books.length;
  }

  canAddBook(book) {
    return true;
  }
}

class RentalBookshelf extends Bookshelf {
  constructor() {
    super();
    this.rentedBooks = [];
  }

  rentBook(book) {
    if (this.isRented(book)) {
      return console.log("現在貸し出し中です");
    } else {
      for(let i = 0; i < this.books.length; i++) {
        if(this.books[i].title === book.title) { 
          this.rentedBooks.push(book);
          this.books.splice(i,1); }
      }
    }
  }

  returnBook(book) {
    this.books.push(book);
    for(let i = 0; i < this.rentedBooks.length; i++) {
      if(this.rentedBooks[i].title === book.title) {
        this.rentedBooks.splice(i, 1);
      }
    }
  }

  listRentedBooks() {
    return this.rentedBooks
  }

  isRented(book) {
    for (let i = 0; i < this.rentedBooks.length; i++) {
      if (this.rentedBooks[i].title === book.title) {
        return true;
      }
    }
    return false;
  }
}

let books = [
  { title: "坊ちゃん", pageSize: 520 },
  { title: "我輩は猫である", pageSize: 454 },
  { title: "こころ", pageSize: 876 }
];

let bookshelf = RentalBookshelf.valueOf(books);

// 借りる
bookshelf.rentBook(books[0]);
bookshelf.rentBook(books[1]);
console.log(bookshelf.listRentedBooks());
if(bookshelf.isRented(books[0])) {
  console.log(`${books[0].title}は貸し出し中です`);
} else {
  console.log(`${books[0].title}は貸し出し中ではありません`);
}

// 返す
bookshelf.returnBook(books[0]);
console.log(bookshelf.listRentedBooks());
if(bookshelf.isRented(books[0])) {
  console.log(`${books[0].title}は貸し出し中です`);
} else {
  console.log(`${books[0].title}は貸し出し中ではありません`);
}