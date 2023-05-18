import AboutStyle from "./AboutStyle";
import { FaJava, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import foto from "../../imgs/Badas-removebg-preview.png"

function About () {

    return (
      <AboutStyle>
        <section id="about">
          <div className="about-title">Sobre mim</div>
          <div className="container">
            <div className="skills">
                <div className="title-skills">
                <span>&#123;</span>Skills<span>&#125;</span>
                </div>
                <div className="container-skills">
                    <div className="icon"><FaJava /> Java <hr className="java"/></div>
                    <div className="icon"><DiJavascript1 /> Javascript <hr className="javascript"/></div>
                    <div className="icon"><FaReact /> React <hr className="react"/></div>
                    <div className="icon"><SiSpringboot /> Spring Boot <hr className="spring"/></div>
                </div>
            </div>
            <hr className="divider"/>
            <div className="info">
                <div className="container-info">
                    <div className="foto"><img src={foto} alt="" /></div>
                    <div className="head-infos">nome : Gabriel Badaró</div>
                </div>
                <div className="text-info">Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Manduma pindureta quium dia nois paga.Aenean aliquam molestie leo, vitae iaculis nisl.</div>
            </div>
          </div>
        </section>
      </AboutStyle>
    );
}

export default About;