import styled from 'styled-components';

const NavbarStyle = styled.div`
  .navbar-main {
    position: fixed;
    height: 5rem;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    font-family: 'Playfair Display', serif;
    box-shadow: 0 0 50px #a484e86a;
  }

  .links {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }

  .social {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style: none;
    margin-left: auto;
    margin-right: 1rem;
    padding: 0;
    margin-top: 0;
  }

  img {
    align-items: center;
    height: 12rem;
  }

  .links li {
    padding: 2rem;
  }

  .links li:last-child {
    margin-right: 0;
  }

  .links li a {

    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }

  .links li a:hover {
    color: #a484e8;
  }

  .social li {
    margin-right: 20px;
    margin-top: 1rem;
  }

  .social li:last-child {
    margin-right: 0;
  }

  .social li a {
    font-size: 1.3rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }

  .social li a:hover {
    color: #a484e8;
  }

`;

export default NavbarStyle;
