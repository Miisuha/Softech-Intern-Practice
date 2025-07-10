import React, { useState } from 'react';
import './PostItem.css';

const PostItem = ({ title, thumbnail, content, author }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(prev => !prev);
  };

  return (
    <div className="post-card">
      <img src={thumbnail} alt={title} className="post-thumbnail" />

      <div className="post-body">
        <h3 className="post-title">{title}</h3>
        <p className="post-author">By {author}</p>

        {showContent && <p className="post-content">{content}</p>}

        <button className="read-more" onClick={toggleContent}>
          {showContent ? 'Hide Details' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default PostItem;
