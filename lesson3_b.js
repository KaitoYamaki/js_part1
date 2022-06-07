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
  
class LimitedBookshelf extends Bookshelf {
  constructor(maxSize = 3) {
    super();
    this.maxSize = maxSize;
  }

  canAddBook(book) {
    return this.books.length < this.maxSize;
  }
}

class ThinBookShelf extends Bookshelf {
  canAddBook(book) {
    if(book.pageSize < 20){
      return false;
    } 
    return true;
  }
}

const bookshelf = new LimitedBookshelf;

bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

if (!bookshelf2.addBook(new Book("坊ちゃん", 520))) {
  console.log('ページ数が多いです');
}
