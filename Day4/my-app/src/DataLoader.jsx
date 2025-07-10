import React, { useState } from 'react';
import './DataLoader.css';

const DataLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="dataloader-card">
      {isLoading ? (
        <>
          <div className="loader-icon">🔄</div>
          <p>Loading data...</p>
          <button className="btn black" onClick={handleFinishLoading}>
            Complete Loading
          </button>
        </>
      ) : (
        <>
          <div className="success-icon">✅</div>
          <p>Data loaded successfully!</p>
          <button className="btn" onClick={() => setIsLoading(true)}>
            Reload
          </button>
        </>
      )}
    </div>
  );
};

export default DataLoader;
