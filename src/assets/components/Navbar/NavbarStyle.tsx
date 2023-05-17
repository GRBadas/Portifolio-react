import styled from 'styled-components';

const NavbarStyle = styled.div`
  .navbar-main {
    position: fixed;
    height: 3rem;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #582970;
    display: flex;
    justify-content: center;
    z-index: 100;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .links li {
    margin-right: 20px;
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
    color: #ffecb3;
  }

  /* Add more styles as needed */
`;

export default NavbarStyle;
