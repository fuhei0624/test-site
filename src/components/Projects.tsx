import React, { useState, useEffect } from 'react';
import { PROJECTS, CATEGORIES } from '../constants';
import { Project, Category } from '../types';
import ProjectCard from './ProjectCard';
import FilterButton from './FilterButton';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      const newFilteredProjects = PROJECTS.filter(project => project.category === activeFilter);
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-widest text-white uppercase">PROJECTS</h2>
          <p className="text-gray-400 mt-2">私たちが手がけたプロジェクト</p>
        </div>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {CATEGORIES.map(category => (
            <FilterButton
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
