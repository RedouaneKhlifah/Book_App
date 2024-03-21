// book Controler
import asynchandler from "express-async-handler";
import { BookSchema, validator } from "../validator/JoiSchemas";
import { BookService } from "../services/BookService";
import { sanitizer } from "../utils/sanitizer";
import { IBook } from "src/types/bookTypes";

const getAllBooks = asynchandler(async (_req, res) => {
    const books = await BookService.getBooks();
    res.status(201).json(books);
});

const getOneBook = asynchandler(async (req, res) => {
    const bookId = req.params.id;
    const book = await BookService.getBookById(bookId);
    res.status(201).json(book);
});
let x = 0;
const createBook = asynchandler(async (req, res) => {
    const { title, author, description, image, language, pages, rating } =
        req.body;

    console.log("x");
    console.log(x++);
    const newBookData: IBook = {
        title,
        author,
        description,
        image,
        language,
        pages,
        rating
    };

    const validationErrors = validator(BookSchema, newBookData);

    if (validationErrors) {
        res.status(400).json({ errors: validationErrors });
        return;
    }
    // Sanitize the data from extra spaces in th front and the end and between each carracter
    const SanitizedData = sanitizer(newBookData);

    const newBook = await BookService.createNewBook(SanitizedData);

    res.status(201).json({ message: "Book created successfully.", newBook });
});

const updateBook = asynchandler(async (req, res) => {
    const bookId = req.params.id;

    const { title, author, description, image, language, pages, rating } =
        req.body;

    const updatedBookData: IBook = {
        title,
        author,
        description,
        image,
        language,
        pages,
        rating
    };

    const validationErrors = validator(BookSchema, updatedBookData);

    if (validationErrors) {
        res.status(400).json({ errors: validationErrors });
        return;
    }

    // Sanitize the data from extra spaces in th front and the end and between each carracter
    const SanitizedData = sanitizer(updatedBookData);

    const updatedBook = await BookService.updateBookById(bookId, SanitizedData);

    res.status(200).json(updatedBook);
});

const deleteBook = asynchandler(async (req, res) => {
    const bookId = req.params.id;
    await BookService.deleteBookById(bookId);
    res.status(200).json({ message: "Book deleted successfully." });
});

export { getAllBooks, getOneBook, createBook, updateBook, deleteBook };
