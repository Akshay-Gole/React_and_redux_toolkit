import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);


    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updatedBooks = [
            ...books,
            response.data
        ]

        setBooks(updatedBooks);
    }

    const editBookByID = async (newTitle, id) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === response.data.id) {
                return { ...book, ...response.data }
            }

            return book
        })

        setBooks(updatedBooks)
    }

    const deleteBookByID = async (removeBookWithID) => {

        await axios.delete(`http://localhost:3001/books/${removeBookWithID}`)

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