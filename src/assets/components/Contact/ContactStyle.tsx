import { styled } from "styled-components";

const ContactStyle = styled.div`


    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #e9ecc7;
        font-size: 20px;
    }

    .title {
        font-size: 36px;
        color: #a484e8;
        margin-bottom: 3rem;
    }

    .social {
        display: flex;
        flex-direction: row;
        list-style: none;
    }

  .social li {
    margin-right: 100px;
    margin-top: 1rem;
  }

  .social li a {
    font-size: 2.5rem;
    color: #e9ecc7;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }

  .social li a:hover {
    color: #a484e8;
  }

  @media screen and (min-width:280px) and (max-width: 1080px) {

  .title {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
  }
  
  .social {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social li {
    margin-right: 40px;
    margin-top: 1rem;
  }

  .social li a {
    font-size: 30px;
  }

  }
`

export default ContactStyle;