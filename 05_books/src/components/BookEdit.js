import { useState } from "react";

function BookEdit({ book, onEdit, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(title, book.id);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleOnChange} />
            <button className='button is-primary'>Save!</button>
        </form>)
}

export default BookEdit;