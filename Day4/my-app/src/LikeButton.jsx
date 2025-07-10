import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [likesCount, setLikesCount] = useState(0);

  return (
    <div className="like-card">
      <div className="like-icon">❤️</div>
      <p>Like ({likesCount})</p>
      <button className="btn black" onClick={() => setLikesCount(likesCount + 1)}>
        ♡ Like
      </button>
      <button className="btn" onClick={() => setLikesCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default LikeButton;
