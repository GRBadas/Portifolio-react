import { styled } from "styled-components";

const ProjectsStyle = styled.div`
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .projects-container {
        display: flex;
        flex-direction: row;
        padding: 0 3rem;
    }

    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-direction: center;
        margin-top: 3rem;
        margin-right: 20rem;
        margin-left: 20rem;
        background-color: white;
        border-radius: 2rem;
        margin-bottom: 3rem;
    }

    .project {
        font-size: 36px;
        color: #dee78f;
        padding: 5rem 0;
        width: 100%;
        background-color: #a484e8;
    }
    
    .title {
        padding: 0 3rem;
        font-size: 72px;
        color: #a484e8;
    }

`

export default ProjectsStyle;