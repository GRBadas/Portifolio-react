import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroStyle = styled.div`
  .welcome {
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: fit-content;
    position: relative;

    .img-container {
      height: fit-content;
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    img {
      width: 60%;
      height: 60%;
      object-fit: cover;
      margin-right: 0;
      border-radius: 30%;
      margin-top: -10%;
      transition: filter 1s, box-shadow 0.5s;
      filter: brightness(0.9);
      &.hovered {
        filter: brightness(0.2);
        box-shadow: 0 0 50px rgba(164, 132, 232, 1);
      }
    }

    .overlay {
      color: white;
      font-size: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
      font-family: 'Playfair Display', serif;
      line-height: 2.5rem;

      span {
        color: #a484e8;
      }

      .overlay-line {
        opacity: 0;
      }

      .overlay-line:nth-child(1) {
        animation: ${fadeIn} 0.5s ease-in forwards;
        animation-delay: 0.1s;
      }

      .overlay-line:nth-child(2) {
        animation: ${fadeIn} 0.5s ease-in forwards;
        animation-delay: 0.3s;
      }

      .overlay-line:nth-child(3) {
        animation: ${fadeIn} 0.5s ease-in forwards;
        animation-delay: 0.5s;
      }

      .overlay-line:nth-child(4) {
        animation: ${fadeIn} 0.5s ease-in forwards;
        animation-delay: 0.7s;
      }

      .overlay-line:nth-child(5) {
        animation: ${fadeIn} 0.5s ease-in forwards;
        animation-delay: 0.9s;
      }

      .overlay-line:nth-child(6) {
        animation: ${fadeIn} 0.5s ease-in forwards;
        animation-delay: 1.1s;
      }

    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #d8d8d8;
      margin-left: 10rem;
      margin-right: 3rem;
      font-family: 'Playfair Display', serif;
      font-family: 'Signika Negative', sans-serif;

      p {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
      }


      h1 {
        display: flex;
        flex-direction: row;
        align-items: baseline;

        .ola {
          font-size: 50px;
          margin-right: 0.5rem;
          color: #a484e8;
          font-family: 'Russo One', sans-serif;
          margin-bottom: -3rem;
        }

        h2 {
          font-size: 30px;
          display: flex;
          flex-direction: row;
        }
      }

      .badas {
        font-size: 50px;
        margin: 0 auto;
        color: #a484e8;
      }
    }
  }

  @media (max-width: 768px) {
    .welcome {
      flex-direction: column;

      img {
        width: 100vw;
        height: 100%;
        margin-left: 0;
        margin-top: 0;
        border-radius: 10px;
        object-fit: cover;
      }

      .text {
        margin-top: 5rem;
        margin-left: 0;
        margin-right: 0;
        position: absolute;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.562);

        h1 {
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: space-between;
        }
        .chame{
            margin-top: 3rem;
            margin-bottom: -3rem;
        }

        .badas {
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  /* Media queries para dispositivos móveis */
  @media (max-width: 480px) {
    .welcome {
      img {
        width: 90%;
      }

      .text {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  }

  /* Media queries para tablets */
  @media (max-width: 1024px) and (orientation: landscape) {
    .welcome {
      img {
        width: 60%;
      }

      .text {
        margin-left: 5rem;
        margin-right: 2rem;
      }
    }
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    .welcome {
      img {
        width: 70%;
      }

      .text {
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }
`;

export default HeroStyle;
