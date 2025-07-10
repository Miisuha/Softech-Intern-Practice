import React from 'react';
import './Alert.css';

const Alert = ({ type, message }) => {
  if (!message) return null;

  return (
    <div className={`alert ${type}`}>
      <span className="icon">{
        type === 'success' ? '✔️' :
        type === 'error' ? '❌' :
        type === 'warning' ? '⚠️' : 'ℹ️'
      }</span>
      <strong className="label">{type.charAt(0).toUpperCase() + type.slice(1)}!</strong>
      <span className="message">{message}</span>
      <span className="close">×</span>
    </div>
  );
};

export default Alert;
