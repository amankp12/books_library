import React from 'react';
import Book from './Book.jsx';
import BookData from '../BookData.js'

function FantasyBooks() {
    return (
        <div>
        <h2>Fantasy</h2>
        <div className='container'>
            {BookData.filter(book => book.url.includes('/Fantasy/')).map((book, index) => (
                <div key={index}>
                    <img src = {book.url} alt={book.title} className= 'image' />
                    <p className = 'title'>{book.title} </p>
                    <p className = 'price'>{book.price} </p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default FantasyBooks;