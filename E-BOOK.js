class Book{
    constructor(title, author, publicationyear, price){
        this.title = title;
        this.author = author;
        this.publicationyear = publicationyear;
        
    }
    displayDetails(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationyear}`);
         }

        /* displayDetails() {
            console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.publicationYear}`);
        }*/
        
}
class Ebook extends Book{
    constructor(title, author, publicationyear, price){
        super(title, author, publicationyear);
        this.price = price;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Price: $${this.price}\n`);
    }
}
const ebook1 = new Ebook('The Attachment Style', 'Ria Martez', 2024, 300.9);
ebook1.displayDetails();
const ebook2 = new Ebook('Harry Potter', 'JK Rowling', 1900, 19.08);
ebook2.displayDetails();
const ebook3 = new Ebook('BOOK3', 'Author 2', 1988, 33.05);
ebook3.displayDetails();
const ebook4 = new Ebook('MessUp','Author 1', 2024, 69.99);
ebook4.displayDetails();

