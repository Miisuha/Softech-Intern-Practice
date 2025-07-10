import React, { useState } from 'react';
import './ListContainer.css';

const ListContainer = ({ items }) => {
  const [showList, setShowList] = useState(true);

  return (
    <div className="list-container">
      <h3>Item List</h3>

      <button
        onClick={() => setShowList(prev => !prev)}
        className="toggle-btn"
      >
        {showList ? 'Hide List' : 'Show List'}
      </button>

      {showList && (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">{item}</li>
          ))}
        </ul>
      )}

      {!showList && (
        <p className="message">List is hidden.</p>
      )}
    </div>
  );
};

export default ListContainer;
