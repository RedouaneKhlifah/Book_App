import { Timestamp, addDoc, collection } from "@firebase/firestore";
import db from "src/config/db";

const BooksCollection = collection(db, "users");

//  Define the type for book data
interface IBook {
    title: string;
    image: string;
    pages: number;
    author: string;
    rating: number;
    description: string;
    language: string;
    category: string;
    createdAt?: Timestamp;
}

// Book class
class Book {
    private data: IBook;

    constructor(data: IBook) {
        this.data = { ...data, createdAt: Timestamp.now() };
    }

    async save() {
        try {
            const docRef = await addDoc(BooksCollection, this.data);

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export default Book;

// // Example of creating and saving a book instance
// const newBookData: IBook = {
//     title: "Sample Book",
//     image: "sample-image.jpg",
//     pages: 200,
//     author: "John Doe",
//     rating: 4.5,
//     description: "A sample book description.",
//     language: "English",
//     category: "Fiction"
// };

// const newBook = new Book(newBookData);
// newBook.save();
