class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayDetails() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.publicationYear}`);
    }
}
class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }
    displayDetails() {
        super.displayDetails();
        console.log(`Price: $${this.price}\n`);
    }
}
[
    new Ebook("The Attachment Style", "Ria Martez", 2024, 300.9),
    new Ebook("Harry Potter", "JK Rowling", 1900, 19.08),
    new Ebook("BOOK3", "Author 2", 1988, 25.33),
    new Ebook("MessUp", "Author 1", 2024, 19.99)

].forEach(ebook => ebook.displayDetails());