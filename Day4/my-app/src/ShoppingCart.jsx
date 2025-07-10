import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', isEditing: false },
    { id: 2, name: 'Bread', isEditing: false }
  ]);

  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    const trimmed = newProduct.trim();
    if (trimmed === '') return;

    const newItem = {
      id: Date.now(),
      name: trimmed,
      isEditing: false
    };

    setItems([...items, newItem]);
    setNewProduct('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditToggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    ));
  };

  const handleEditChange = (id, newName) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  const handleEditSubmit = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isEditing: false } : item
    ));
  };

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      <ul className="cart-list">
        {items.map(item => (
          <li key={item.id} className="cart-item">
            {item.isEditing ? (
              <>
                <input
                  value={item.name}
                  onChange={(e) => handleEditChange(item.id, e.target.value)}
                  onBlur={() => handleEditSubmit(item.id)}
                  onKeyDown={(e) => e.key === 'Enter' && handleEditSubmit(item.id)}
                  autoFocus
                />
              </>
            ) : (
              <span>{item.name}</span>
            )}

            <div className="btn-group">
              <button onClick={() => handleEditToggle(item.id)} className="edit-btn">
                {item.isEditing ? 'Save' : 'Edit'}
              </button>
              <button onClick={() => handleDelete(item.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-controls">
        <input
          type="text"
          placeholder="Enter product name"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          className="cart-input"
        />
        <button onClick={handleAddProduct} className="cart-button">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
