import ProjectsStyle from "./ProjectsStyle";

function Projects() {

    return (
        <>
        <section id="Projetos">
        <ProjectsStyle >
            <div className="container">
            <div className="title"> Projetos </div>
                <div className="projects-container">
                    <div className="projects">
                        <div className="project">
                                Projeto 1
                        </div>
                        <div className="project">
                                Projeto 2
                        </div>
                    </div>
                    
                    <div className="projects">
                        <div className="project">
                                Projeto 3
                        </div>
                        <div className="project">
                                Projeto 4
                        </div>
                    </div>
                </div>
            </div>
        </ProjectsStyle>
        </section>
        </>
    )

}

export default Projects;