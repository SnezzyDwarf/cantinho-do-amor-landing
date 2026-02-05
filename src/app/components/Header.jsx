import logotipo from "../assets/images/logoNoBckNoL.png";
import HeartIcon from "../assets/Ui/HeartIcon";
import CatPaw from "../assets/Ui/CataPaw";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header_container">
          <div className="header__nav-group--left">
            <img src={logotipo} alt="logotipo" defer className="header_logo" />

            <div className="nav-group--container-left-text">
              <h1 className="title">CANTINHO DO AMOR</h1>

              <h2 className="message">SAVING CATS</h2>

              <p className="sub_message">AJUDAR QUEM TANTO PRECISA</p>
            </div>
          </div>
          {/*CENTER/Right (desktop) */}
          <nav className="header_nav-group--center">
            <CatPaw size={40} className="center-icon" />
            <a href="#about">Sobre Nos</a>
            <CatPaw size={40} className={"center-icon"} />
            <a href="#objective">Objectivo</a>
            <CatPaw size={40} className={"center-icon"} />
            <a href="#counter">Vidas Salvas</a>
            <CatPaw size={40} className={"center-icon"} />
            <a href="#cats">Antes & Depois</a>
            <CatPaw size={40} className={"center-icon"} />
            <a href="#donation">Como Ajudar</a>
          </nav>
        </div>
      </header>
    </>
  );
}
