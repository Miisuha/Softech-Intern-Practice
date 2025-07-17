import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center py-20 animate-pulse">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, this page doesn't exist.</p>
      <Link to="/" className="text-blue-600 underline">Back to Home</Link>
    </div>
  );
};

export default NotFound;