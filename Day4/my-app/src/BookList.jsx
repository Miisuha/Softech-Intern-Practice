import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="booklist-container">
      <h3>📚 Book List</h3>
      <div className="book-grid">
        {books.map(book => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
