import styled from "styled-components"

const AboutStyle = styled.div`
  color: #e9ecc7;
  margin-top: 10rem;
  margin-bottom: 10rem;

  .about {
    display: flex;
  }

  .about-title {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    color: #a484e8;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .head-infos {
    display: flex;
    font-family: 'Playfair Display', serif;
    font-size: 18px;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    .title-skills {
      font-size: 60px;
      align-self: center;
      margin-bottom: 5rem;
    }

    span {
      color: #a484e8;
    }

    .skills {
      display: flex;
      flex-direction: column;
      margin-left: 5rem;
      width: 100%;
      margin-right: 5rem;
    }

    .container-skills {
      display: flex;

      .icon {
        margin-bottom: 2rem;
        padding: 3rem;
        margin-right: 0;
        font-size: 5rem;
        color: #a484e8;
        display: flex;
        justify-content: flex-start;
      }

      .icon:hover {
        transform: scale(1.1) translateX(2px) translateY(4px);
        animation: colorChange 1.5s infinite;
        transition: ease-in-out 0.4s;
        font-size: 5.2rem;
      }

      @keyframes colorChange {
        0% {
          color: #dee78f;
        }
        33% {
          color: #a484e8;
        }
        66% {
          color: #8fd2e7;
        }
        100% {
          color: #97dbb6;
        }
      }

    }

    .info {
      width: 100%;
    }

    .divider {
      height: 30rem;
      width: 1px;
      background-color: #a484e8;
      border: none;
      opacity: 0.7;
    }

    img {
      background-color: #a484e8;
      height: 300px;
      margin: 3rem;
      margin-left: 4rem;
      border-radius: 5rem;
      border-style: solid;
      border-color: #a484e8;
      box-shadow: 0 0 20px rgba(164, 132, 232, 1);
      filter: brightness(0.8);
    }
  }

  .container-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
  }

  .text-info {
    padding: 0 4rem;
    font-size: 18px;
  }

  @media screen and (min-width:280px) and (max-width: 980px) {

    .container-skills {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }

  .container-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  .text-info {
    padding: 0 4rem;
    font-size: 18px;
  }

  .icon {
    font-size: 2rem;
    width: 50%;
    box-sizing: border-box;
    padding: 1rem;
  }

      .about-title {
      font-size: 48px;
    }

    .container {
      flex-direction: column;

      .title-skills {
        font-size: 36px;
        margin: 0;
        margin-bottom: 3rem;
      }

      .skills {
        margin-left: 0;
      }

      .divider {
        width: 100%;
        height: 1px;
      }

      img {
        width: 20rem;
        height: auto;
        margin: 0;
        margin-top: 5rem;
        border-style: none;
      }

    }

    .container-info {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 0;
      margin-bottom: 2rem;
      width: 100%;
    }

    .text-info {
      padding: 2;
      font-size: 18px;
      text-align: center;
    }

    }
`;

export default AboutStyle;
