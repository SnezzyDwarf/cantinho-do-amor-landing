import logotipo from "../assets/images/logoNoBckNoL.png";
import paw from "../assets/images/pawCatHeader.png";
import heart from "../assets/images/HeartOutline.png";
import heartFilled from "../assets/images/HeartFill.png";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div>
          <div className="header__nav-group--left">
            <img src={logotipo} alt="logotipo" defer className="header_logo" />
            <div className="nav-group--container-left">
              <h1 className="title">CANTINHO DO AMOR</h1>

              <h2 className="message">SAVING CATS</h2>

              <p className="sub_message">AJUDAR QUEM TANTO PRECISA</p>
            </div>
          </div>
          <nav className="header_nav-group--center">
            <img src={paw} alt="" />
            <a href="#about">Sobre Nos</a>
            <img src={paw} alt="" />
            <a href="objective">Objectivo</a>
            <img src={paw} alt="" />
            <a href="chanllenges">Desafios</a>
            <img src={paw} alt="" />
            <a href="#cats">Vidas Salvas</a>
            <img src={paw} alt="" />
            <a href="#galeria">Antes & Depois</a>
          </nav>
          <button className="donate-button">
            <img
              src={heart}
              alt="coracao"
              className="donate-button_icon--outline"
            />
            <img
              src={heartFilled}
              alt="coracao cheio"
              className="donate-button_icon--filled"
            />
            <span>Doar</span>
          </button>
        </div>
      </header>
    </>
  );
}
