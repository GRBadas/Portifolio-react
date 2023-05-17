import NavbarStyle from "./NavbarStyle";

function Navbar () {

    return (
        <>
        <NavbarStyle>
            <div className="navbar-main">
                <ul className="links">
                    <li><a href="#Sobre">Sobre</a></li>
                    <li><a href="#Projetos">Projetos</a></li>
                    <li><a href="#Contato">Contato</a></li>
                </ul>
            </div>
        </NavbarStyle>
        </>
    )

}

export default Navbar;