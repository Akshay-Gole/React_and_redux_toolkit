import { useState, useContext } from "react";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
    const { editBookByID } = useBooksContext();
    const [title, setTitle] = useState(book.title);

    const handleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookByID(title, book.id)
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleOnChange} />
            <button className='button is-primary'>Save!</button>
        </form>)
}

export default BookEdit;