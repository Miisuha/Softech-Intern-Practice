import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="text-center">
      <h1 className="text-4xl text-blue-600 font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-2 text-yellow-600">Hi, I'm a web developer passionate about building responsive and interactive web apps.</p>
      <img src="https://via.placeholder.com/150" alt="Profile" className="mx-auto rounded-full" />
      <button className="mt-4 bg-blue-500 px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
        Go to About ({count})
      </button>
      <div className="mt-2">
        <Link to="/about" className="text-blue-600 underline">Learn more about me</Link>
      </div>
    </section>
  );
};

export default Home;