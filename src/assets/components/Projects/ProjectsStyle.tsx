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
        margin-top: 5rem;
        margin-right: 5rem;
        margin-left: 5rem;
        border-radius: 2rem;
        margin-bottom: 5rem;
    }

    .project {
        color: #dee78f;
        margin-bottom: 3rem;
        border-radius: 15rem;
        position: relative;
        img {
            border-radius: 15rem;
            max-width: 100%;    
            box-shadow: 0 0 20px #a484e86a;
            transition: ease-in-out 0.5s;
        }&:hover img{
            transform: scale(1.12) translateX(2px) translateY(4px);
            transition: ease-in-out 0.5s;
            box-shadow: 0 0 10px #fde59765;
            filter: brightness(0.5) blur(2px);
      }
    }
    .project-description {
        font-family: 'Playfair Display', serif;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.4);
        color: #e9ecc7;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 32px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .project:hover .project-description {
        opacity: 1;
        visibility: visible;
        cursor: pointer;
    }
    
    .title {
        padding: 0 3rem;
        font-size: 72px;
        color: #a484e8;
    }

    @media screen and (min-width:280px) and (max-width: 980px) {
        .projects-container {
      flex-direction: column;
      padding: 0;
      width: 80%;
    }

    .projects {
      margin: 0;
    }

    .title {
      font-size: 48px;
      margin-bottom: 3rem;
    }
    }

`

export default ProjectsStyle;