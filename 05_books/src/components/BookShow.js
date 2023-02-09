import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {

    const { deleteBookByID } = useBooksContext();

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        deleteBookByID(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    // refer video 130 and 131 for more info
    const handleSubmit = () => {
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow