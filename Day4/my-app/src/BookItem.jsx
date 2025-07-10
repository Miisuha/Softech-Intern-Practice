import React from 'react';
import './BookItem.css';

const BookItem = ({ title, author, year }) => {
  return (
    <div className="book-card">
      <h4 className="book-title">📘 {title}</h4>
      <p className="book-author">👤 {author}</p>
      <p className="book-year">📅 {year}</p>
    </div>
  );
};

export default BookItem;
