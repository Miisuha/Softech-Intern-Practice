import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './About.module.css';

const About: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className="text-black">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I am a full-stack developer with experience in React, Node.js, and modern web technologies. I love solving problems and creating beautiful UIs.
      </p>
      <button
        className="bg-green-500 text-white px-3 py-1 rounded mb-4"
        onClick={() => setShowSkills(!showSkills)}
      >
        {showSkills ? 'Hide Skills' : 'Show Skills'}
      </button>
      {showSkills && (
        <ul className="list-disc pl-6">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      )}
      <div className="mt-4">
        <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : '')}>
          View Projects
        </NavLink>
      </div>
    </section>
  );
};

export default About;
