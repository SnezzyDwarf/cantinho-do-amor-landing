import HeartIcon from "../assets/Ui/HeartIcon";
import "../styles/Footer.css";
import InstagramIconBlack from "../assets/Ui/InstagramIconNoColor";
import FacebookIconBlack from "../assets/Ui/FacebookIconNoColor";
import InstaColor from "../assets/Ui/InstaColor";

import FacebookColor from "../assets/Ui/FacebookIcon";

export default function Footer() {
  return (
    <>
      <footer className="section_footer">
        <div className="footer_principal">
          <div className="footer_information_client">
            <div className="footer_slogan">
              <h3>Cantinho do amor</h3>
              <p>Juntos, podemos fazer a diferença Um gatinho de cada vez</p>
            </div>
            <div className="footer_socials-client">
              <h3>Redes Sociais:</h3>
              <div className="buttons_footer-container">
                <button className="button-footer">
                  <a
                    href="https://www.instagram.com/cantinho.do.amor_cats?igsh=MXE2dDlvYjU4ZGxncA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <span>
                      <InstagramIconBlack size={50} />
                    </span>
                    <span>
                      <InstaColor size={47} />
                    </span>
                  </a>
                </button>
                <button className="button-footer ">
                  <a
                    href="https://www.facebook.com/profile.php?id=61569264656662&rdid=qkIS3a2DhE8k6AEN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KUuLACyDM%2F#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <span>
                      <FacebookIconBlack size={40} />
                    </span>
                    <span>
                      <FacebookColor size={17} className="facebook-color" />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="footer_links">
            <h3>Links Rápidos:</h3>
            <ul>
              <li>
                <a href="#about">Sobre Nos</a>
              </li>
              <li>
                <a href="#objective">Objectivo</a>
              </li>
              <li>
                <a href="#counter">Vidas Slavas</a>
              </li>
              <li>
                <a href="#cats">Antes & Depois</a>
              </li>
              <li>
                <a href="#donation">Como Ajudar</a>
              </li>
            </ul>
          </div>
          <div className="footer_contacts-client">
            <h2>Contactos</h2>
            <p>Telefone: 966 245 228</p>
            <p>Email: cantinho.do.amor@outlook.pt</p>
          </div>
        </div>

        <div className="footer_second">
          <div className="footer_trademark">
            <p>&copy; 2026 Cantinho Do Amor. Todos os direitos reservados.</p>
          </div>

          <div className="footer_socials-my">
            <p className="footer_my-text">
              Feito com
              <span>
                <HeartIcon size={20} />
              </span>
              por Bruno Pernão
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
