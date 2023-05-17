import styled from 'styled-components';

const HeroStyle = styled.div`
  .welcome {
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: fit-content;

    img {
      width: 40%;
      height: 40%;
      object-fit: cover;
      margin-left: 10rem;
      margin-right: 0;
      border-radius: 30%;
      margin-top: -10%;
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
        font-size: 30px;
      }

      h1 {
        display: flex;
        flex-direction: row;
        align-items: baseline;

        .ola {
          font-size: 50px;
          margin-right: 0.5rem;
          color: #582970;
          font-family: 'Russo One', sans-serif;
        }

        h2 {
          font-size: 30px;
        }
      }

      .badas {
        font-size: 50px;
        margin: 0 auto;
        color: #582970;
        margin-top: -2rem;
        margin-bottom: -1rem;
      }
    }
  }

  @media (max-width: 768px) {
    .welcome {
      flex-direction: column;

      img {
        width: 80%;
        height: auto;
        margin-left: 0;
        margin-top: 0;
        border-radius: 10px;
      }

      .text {
        margin-left: 0;
        margin-right: 0;

        h1 {
          flex-direction: column;
          align-items: center;
          text-align: center;
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
