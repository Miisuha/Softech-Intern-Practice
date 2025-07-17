import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
  '1': { title: 'Project One', description: 'Detailed description of Project One.' },
  '2': { title: 'Project Two', description: 'Detailed description of Project Two.' },
  '3': { title: 'Project Three', description: 'Detailed description of Project Three.' },
};

type ProjectId = keyof typeof projectDetails;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[(id as ProjectId) || '1'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-black">{project.title}</h2>
      <p className="mb-4 text-black">{project.description}</p>
      <Link to="/projects" className="text-blue-500 underline">
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
