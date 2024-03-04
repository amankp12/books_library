import React from 'react';
import Book from './Book.jsx';
import BookData from '../BookData.js'
import './style.css'

function FictionBooks() {
    return (
        <div>
        <h2>Fiction</h2>
        <div className='container'>
            {BookData.filter(book => book.url.includes('/Fiction/')).map((book, index) => (
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

export default FictionBooks;