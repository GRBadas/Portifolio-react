import Logo from "../../imgs/logo-branca-roxa.png"
import NavbarStyle from "./NavbarStyle";
import { BsInstagram, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';

function Navbar () {

    return (
      <>
        <NavbarStyle>
          <div className="navbar-main">
            <img className="logo" src={Logo} alt="" />
            <ul className="links">
              <li>
                <a href="#Sobre">Sobre</a>
              </li>
              <li>
                <a href="#Projetos">Projetos</a>
              </li>
              <li>
                <a href="#Contato">Contato</a>
              </li>
              
            </ul>
            <ul className="social">
              <li>
                <a
                  href="https://contate.me/badasdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gabriel-badaró-22b5b5234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/grbadas/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
              <a
                  href="https://github.com/GRBadas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </div>
        </NavbarStyle>
      </>
    );

}

export default Navbar;