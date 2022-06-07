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
    this.rejection = 0;
  }

  canAddBook(book) {
    return this.books.length < this.maxSize;
  }

  addBook(book) {
    if (!this.canAddBook(book)){
      this.rejection += 1;
      return false;
    } 
    this.books.push(book);
    return true;
  }

  getRejection(){
    return this.rejection;
  }
}
  
const bookshelf = new LimitedBookshelf;

bookshelf.addBook(new Book("坊ちゃん", 520));
bookshelf.addBook(new Book("我輩は猫である", 454));
bookshelf.addBook(new Book("こころ", 876));

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}

console.log(`拒否回数：${bookshelf.getRejection()}`);

if (!bookshelf.addBook(new Book("門", 345))) {
  console.log(`新しい本を追加できませんでした。今の本の数: ${bookshelf.size()}`);
}
console.log(`拒否回数：${bookshelf.getRejection()}`);