import React from 'react';
import PostItem from './PostItem';
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p className="no-posts">No posts available.</p>
      ) : (
        posts.map(post => (
          <PostItem
            key={post.id}
            title={post.title}
            content={post.content}
            thumbnail={post.thumbnail}
            author={post.author}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
