import Logo from "../../imgs/logo-branca-roxa.png";
import NavbarStyle from "./NavbarStyle";
import { BsInstagram, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ResponsiveNav from "./ResponsiveNav";

function Navbar() {

  const [navbarState, setNavbarState] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        setNavbarState(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavbarStyle>
        <div className="navbar-main">
          <img className="logo" src={Logo} alt="" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
          <ul className="links">
            <li>
              <a href="#hero">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
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
                href="mailto:grbadas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
            </li>
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
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#hero" onClick={() => setNavbarState(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#About" onClick={() => setNavbarState(false)}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#Projetos" onClick={() => setNavbarState(false)}>
              Recomendações
            </a>
          </li>
          <li>
            <a href="#Contato" onClick={() => setNavbarState(false)}>
              Clientes Satisfeitos
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

export default Navbar;
