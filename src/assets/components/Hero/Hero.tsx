import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import HeroStyle from './HeroStyle';
import BadasImage from '../../imgs/Badas.jpg';

function Hero() {
  const olaRef = useRef(null);
  const chameRef = useRef(null);
  const badasRef = useRef(null);
  const bemVindoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const options = {
      typeSpeed: 40,
      backSpeed: 50,
      loop: false,
      showCursor: false
    };

    const olaTyped = new Typed(olaRef.current, {
      ...options,
      strings: ["Olá!"],
      onComplete: () => {

        const chameTyped = new Typed(chameRef.current, {
          ...options,
          strings: ["Me chame de "],
          onComplete: () => {

            const badasTyped = new Typed(badasRef.current, {
              ...options,
              strings: ["Badas"],
              onComplete: () => {
                
                const bemVindoTyped = new Typed(bemVindoRef.current, {
                  ...options,
                  strings: ["Seja bem-vindo(a) ao meu portfólio"],
                });
              },
            });
          },
        });
      },
    });

    return () => {
      olaTyped.destroy();
    };
  }, []);

  return (
    <HeroStyle>
      <section id="hero">
        <div className="welcome">
          <div className="text">
            <h1>
              <div className="ola" ref={olaRef}></div>
              <div className="chame" ref={chameRef}></div>
            </h1>
            <h2>
              <div className="badas" ref={badasRef}></div>
            </h2>
            <p>
              <div className="bem-vindo" ref={bemVindoRef}></div>
            </p>
          </div>
          <div className='img-container'>
            <img
              src={BadasImage}
              alt=""
              className={`image-container ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {isHovered && (
              <div className="overlay">
                <div className="overlay-line">Olá, me chamo <span>Gabriel Badaró</span>,</div>
                <div className="overlay-line">
                  um estudante de <span>análise e desenvolvimento de sistemas</span> com paixão pela área,
                </div>
                <div className="overlay-line">
                  sempre em busca de mais conhecimento e de melhorar minhas habilidades atuais.
                </div>
                <div className="overlay-line">
                  Atualmente tenho focado meus estudos em <span>React, Typescript e frontend</span>,
                </div>
                <div className="overlay-line">
                  mas não me limito a isso, também gosto muito de backend,
                </div>
                <div className="overlay-line">
                  e estou sempre buscando criar <span>projetos fullstack</span>.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </HeroStyle>
  );
}

export default Hero;
