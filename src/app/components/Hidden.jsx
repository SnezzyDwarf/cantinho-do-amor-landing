import { useState } from "react";
import "../styles/Hidden.css";
import CatPaw from "../assets/Ui/CataPaw";

export default function Hidden() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const openMenu = () => {
    setIsLeaving(false);
    setIsOpen(true);

    requestAnimationFrame(() => {
      setIsEntering(true);
    });
  };

  const closeMenu = () => {
    setIsLeaving(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsLeaving(false);
      setIsEntering(false);
    }, 600);
  };

  return (
    <>
      {/*menu mobile (future)*/}

      {!isOpen && (
        <button className="menu-button" onClick={openMenu}>
          ☰
        </button>
      )}
      {isOpen && (
        <div className={`menu-overlay`}>
          <div
            className={`hidden_menu ${isLeaving ? "leaving" : isEntering ? "entering" : ""} `}
          >
            <div className="hidden-nav_bar">
              <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <div className="hidden_nav-row">
                  <CatPaw size={25} className="hidden-icon" />
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault;
                      closeMenu();
                      setTimeout(() => {
                        document
                          .querySelector("#about")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 600);
                    }}
                  >
                    Sobre Nos
                  </a>
                </div>
                <div className="hidden_nav-row">
                  <CatPaw size={25} className={"hidden-icon"} />
                  <a
                    href="#objective"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        document
                          .querySelector("#objective")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 600);
                    }}
                  >
                    Objectivo
                  </a>
                </div>
                <div className="hidden_nav-row">
                  <CatPaw size={25} className={"hidden-icon"} />
                  <a
                    href="#counter"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        document
                          .querySelector("#counter")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 600);
                    }}
                  >
                    Vidas Salvas
                  </a>
                </div>
                <div className="hidden_nav-row">
                  <CatPaw size={25} className={"hidden-icon"} />
                  <a
                    href="#cats"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        document
                          .querySelector("#cats")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 600);
                    }}
                  >
                    Antes & Depois
                  </a>
                </div>
                <div className="hidden_nav-row">
                  <CatPaw size={25} className={"hidden-icon"} />
                  <a
                    href="#donation"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        document
                          .querySelector("#donation")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 600);
                    }}
                  >
                    Como Ajudar
                  </a>
                </div>
              </nav>
              <button onClick={closeMenu} className="menu-button">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
