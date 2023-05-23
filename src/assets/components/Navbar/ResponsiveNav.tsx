import { styled } from "styled-components";


// eslint-disable-next-line no-undef
const ResponsiveNav = styled.div<ResponsiveNavProps>`
    display: flex;
    position: fixed;
    z-index: 5;
    top: ${props => props.state ? "50px" : "-400px"};
    background-color: #201622f8;
    height: 40vh;
    width: 100%;
    align-items: center;
    transition: 0.4s ease-in-out;
    box-shadow: 0 0 10px #a484e86a;
    
    
    ul {
        list-style-type: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        li {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            margin-top: 1rem;
            background-color: rgba(205, 207, 172, 0.301);
            width: 20rem;
            border-radius: 2rem;
            box-shadow: 1px 1px 8px#e9ecc7;
            a {
                text-decoration: none;
                color: #e9ecc7;
                font-size: 1.6rem;
                transition: 0.1s ease-in-out;
                &:hover {
                    color: #8d9445;
                }
            }
        }
      }
      `;

      export default ResponsiveNav;