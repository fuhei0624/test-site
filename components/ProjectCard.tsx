
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, category, imageUrl } = project;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-0 left-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 m-4 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
