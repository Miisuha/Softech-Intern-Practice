import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4 sticky top-0 z-50">
      <ul className="flex gap-4 justify-center">
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;