import AboutStyle from "./AboutStyle";
import { FaJava, FaReact } from 'react-icons/fa';
import { DiJavascript1, DiMysql, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiSpringboot, SiTypescript } from 'react-icons/si';
import foto from "../../imgs/Imagem do WhatsApp de 2023-05-18 à(s) 10.05.05.jpg"

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
                    <div className="icon"><FaJava /> </div>
                    <div className="icon"><DiJavascript1 /> </div>
                    <div className="icon"><FaReact /> </div>
                    <div className="icon"><SiSpringboot /> </div>
                </div>
                <div className="container-skills">
                    <div className="icon"><DiMysql /> </div>
                    <div className="icon"><DiHtml5 /> </div>
                    <div className="icon"><DiCss3 /> </div>
                    <div className="icon"><SiTypescript /> </div>
                </div>
            </div>
            <hr className="divider"/>
            <div className="info">
                <div className="container-info">
                    <div className="foto"><img src={foto} alt="" /></div>
                    <div className="text-head">
                      <div className="head-infos">Olá, pode me chamar de Badas, sou um estudante de análise e desenvolvimento de sistemas,
                        , tenho 24 anos, e almejo me tornar um desenvolvedor fullstack</div>
                      </div>
                    </div>
                <div className="text-info"> A algum tempo atrás resolvi mudar de área e seguir a paixão que sempre tive por computadores e tecnologia, e comecei a cursar ADS, e percebi que realmente é onde me encaixo.
                Desde então passei por algumas fases no meu estudo, tive contato com Java através da faculdade, e decidi me aprofundar um pouco mais, passei um bom tempo estudando Spring Boot, e desenvolvi alguns projetos,
                foi necessário durante esse processo aprender como lidar com banco de dados, e pra isso corri atrás de estudar MySQL. 
                Tive também um bom contato com Front-end, já que queria desenvolver meu próprio site ( Esse aqui, no caso ), e para isso estudei Javascript, React, Typescript, CSS, já que gostei bastante, também desenvolvi alguns projetos.
                No momento estou buscando oportunidades de trabalho para ter experiências reais no mercado de TI, e estou aberto a oportunidades, estou no começo da minha jornada, mas sou uma pessoa com muita sede de conhecimento e apaixonada pela
                área, gosto de encarar novas tecnologias como desafios, e estou sempre aberto a novos conhecimentos.
                 </div>
            </div>
          </div>
        </section>
      </AboutStyle>
    );
}

export default About;