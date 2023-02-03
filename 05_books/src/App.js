import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title
            }
        ]

        setBooks(updatedBooks);
    }

    const editBookByID = (newTitle, id) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }

            return book
        })

        setBooks(updatedBooks)
    }

    const deleteBookByID = (removeBookWithID) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== removeBookWithID;
        })

        setBooks(updatedBooks);
    }

    return <div className='app'>
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;
