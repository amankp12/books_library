import React from 'react';

function Book(props) {
    return (
        <div>
           <img src={props.url} alt="Books" />
           <h2>{props.title}</h2>
           <h2>{props.price}</h2>
        </div>
    );
}

export default Book;