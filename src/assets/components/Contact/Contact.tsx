import ContactStyle from "./ContactStyle";
import { BsInstagram, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';
import ContactForm from "./ContactForm";

function Contact() {

    return(
        <ContactStyle>
        <section id="contact">
            <div className="container">
                <div className="title">
                    Entre em contato comigo e vamos trabalhar juntos !
                </div>
                <h1>Formulário de Contato</h1>
                <ContactForm />
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
        </section>
        </ContactStyle>
    )

}

export default Contact;