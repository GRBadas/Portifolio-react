import { useState } from 'react';
import ProjectsStyle from './ProjectsStyle';
import siteViagem from '../../imgs/site-viagem.png';
import todo from '../../imgs/to-do.png';

interface ProjectData {
  imageUrl: string;
  link: string;
  altText: string;
  description: string;
}

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseEnter = (index: number | null) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const projectsData: ProjectData[] = [
    {
      imageUrl: siteViagem,
      link: 'https://cosmic-manatee-3e55a6.netlify.app',
      altText: 'Site de Viagem',
      description: 'Site de agenda e gerenciamento de viagens desenvolvido com React',
    },
    {
      imageUrl: todo,
      link: 'https://serene-youtiao-6a250e.netlify.app',
      altText: 'Lista de Tarefas',
      description: 'Lista de Tarefas desenvolvido utilizando React',
    },
  ];

  return (
    <section id="Projetos">
      <ProjectsStyle>
        <div className="container">
          <div className="title">Projetos</div>
          <div className="projects-container">
            {projectsData.map((project, index) => (
              <div
                className={`projects ${hoveredProject === index ? 'hovered' : ''}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.imageUrl} alt={project.altText} />
                  </a>
                  {hoveredProject === index && (
                    <div className="project-description">{project.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProjectsStyle>
    </section>
  );
}

export default Projects;
