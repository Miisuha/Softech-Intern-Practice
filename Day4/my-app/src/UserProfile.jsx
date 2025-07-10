import React from 'react';

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>Hello, I am {name} and I am {age} years old.</p>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
