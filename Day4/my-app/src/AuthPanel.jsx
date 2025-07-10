import React, { useState } from 'react';
import './AuthPanel.css';

const AuthPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="auth-panel">
      <h3>👤 User Authentication</h3>

      {isLoggedIn ? (
        <>
          <p className="success-msg">You are logged in!</p>
          <button className="btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <p>Please login to continue</p>
          <button className="btn black" onClick={() => setIsLoggedIn(true)}>🔐 Login</button>
        </>
      )}
    </div>
  );
};

export default AuthPanel;
