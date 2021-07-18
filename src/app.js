"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var Book = /** @class */ (function () {
    function Book(t, d, a, f, fc) {
        this.id = guid_typescript_1.Guid.create().toString();
        this.title = t;
        this.description = d;
        this.authors = a;
        this.favorite = f;
        this.fileCover = fc;
    }
    return Book;
}());
var BookRepository = /** @class */ (function () {
    function BookRepository() {
        this.storage = [];
    }
    BookRepository.prototype.createBook = function (myBook) {
        this.storage.push(myBook);
    };
    BookRepository.prototype.getBooks = function () {
        return this.storage;
    };
    BookRepository.prototype.getBook = function (id) {
        for (var i = 0; i < this.storage.length; ++i) {
            if (this.storage[i].id === id) {
                return this.storage[i];
            }
        }
        return console.log('404 - book not found');
    };
    BookRepository.prototype.deleteBook = function (id) {
        for (var i = 0; i < this.storage.length; ++i) {
            if (this.storage[i].id === id) {
                this.storage.splice(i);
                return console.log("Delete");
            }
        }
        return console.log('404 - book not found');
    };
    BookRepository.prototype.updateBook = function (id, myBook) {
        for (var i = 0; i < this.storage.length; ++i) {
            if (this.storage[i].id === id) {
                this.storage[i].title = myBook.title;
                this.storage[i].description = myBook.description;
                this.storage[i].authors = myBook.authors;
                this.storage[i].favorite = myBook.favorite;
                this.storage[i].fileCover = myBook.fileCover;
                return this.storage[i];
            }
        }
        return console.log('404 - book not found');
    };
    return BookRepository;
}());
var b = new BookRepository();
b.createBook(new Book('title1', 'desc1', 'author1', 'f1', 'fc1'));
console.log(b.getBooks());
