import HeroStyle from "./HeroStyle";
import BadasImage from "../Badas.jpg";

function Hero () {
    return (
        <>
        <HeroStyle>
            <div className="welcome">
                <div className="text">
                    <h1><div className="ola"> Olá ! </div><h2>Me chame de </h2></h1>
                    <h3 className="badas">Badas</h3>
                    <p>Seja bem-vindo(a) ao meu portifólio</p>
                </div>
                <img src={BadasImage} alt="" />
            </div>
        </HeroStyle>
        </>
    )
}

export default Hero;
