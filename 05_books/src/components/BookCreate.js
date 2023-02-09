import { useState, useContext } from 'react';
// import BooksContext from '../context/books';
import useBooksContext from "../hooks/use-books-context";


function BookCreate() {

    const { createBook } = useBooksContext();

    const [title, setTitle] = useState('');

    const handleOnChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("")
    }

    return <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleOnChange} />
            <button className='button'>Create!</button>
        </form>
    </div>
}

export default BookCreate