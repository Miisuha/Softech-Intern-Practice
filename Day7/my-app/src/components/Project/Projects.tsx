import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: '1', title: 'Project One', description: 'A cool project with React and Tailwind.' },
  { id: '2', title: 'Project Two', description: 'An interesting full-stack web application.' },
  { id: '3', title: 'Project Three', description: 'A portfolio built with Vite and React.' },
];

const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <Link to={`/projects/${project.id}`} className="text-blue-500 underline">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;