import { styled } from "styled-components";

const ContactStyle = styled.div`

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title {
        font-size: 36px;
        color: #a484e8;
        margin-bottom: 3rem;
    }

    .social {
        display: flex;
        flex-direction: row;
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
`

export default ContactStyle;