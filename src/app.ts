import { Guid }  from "guid-typescript"

interface book {
    id: string,
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string
}

class Book implements book {
    id: string
    title: string
    description: string
    authors: string
    favorite: string
    fileCover: string    
    constructor(t:string, d: string, a: string, f: string, fc: string) {
        this.id = Guid.create().toString()
        this.title = t
        this.description = d
        this.authors = a
        this.favorite = f
        this.fileCover = fc
    }
}

class BookRepository {
    storage : book[]=[]
    createBook(myBook : Book) {
        this.storage.push(myBook)
    }
    getBooks() {
        return this.storage
    }
    getBook(id:string) {
        for (let i = 0; i < this.storage.length; ++i) {
            if (this.storage[i].id ===  id) {
                return this.storage[i]
            }
        }
        return console.log('404 - book not found')
    }
    deleteBook(id:string) {
        for (let i = 0; i < this.storage.length; ++i) {
            if (this.storage[i].id ===  id) {
                this.storage.splice(i)
                return console.log("Delete")
            }
        }
        return console.log('404 - book not found')
    }
    updateBook(id:string, myBook : Book) {
        for (let i = 0; i < this.storage.length; ++i) {
            if (this.storage[i].id ===  id) {
                this.storage[i].title = myBook.title
                this.storage[i].description = myBook.description
                this.storage[i].authors = myBook.authors
                this.storage[i].favorite = myBook.favorite
                this.storage[i].fileCover = myBook.fileCover
                return this.storage[i]
            }
        }        
        return console.log('404 - book not found')
    }
}

let b = new BookRepository()
b.createBook(new Book('title1','desc1','author1','f1','fc1'));
console.log(b.getBooks())
