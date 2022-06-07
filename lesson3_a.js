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

class RejectedBocchanBookShelf extends Bookshelf {
  canAddBook(book) {
    if(book.title === '坊っちゃん'){
      return false;
    }
    return true;
  }
}

const bookshelf = new LimitedBookshelf;

bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

const bookshelf2 = new RejectedBocchanBookShelf;

if (!bookshelf2.addBook(new Book("坊っちゃん", 520))) {
  console.log(`坊っちゃんを追加できませんでした`);
} else {
  console.log('追加できました。')
}
