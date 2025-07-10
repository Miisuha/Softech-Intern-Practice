import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`theme-container ${currentTheme}`}>
      <p>Current Theme: <strong>{currentTheme}</strong></p>
      <button onClick={toggleTheme} className="theme-button">
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
