import HeartIcon from "../assets/Ui/HeartIcon";
import "../styles/Footer.css";

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
              <button>Instagram</button>
              <button>Facebook</button>
            </div>
          </div>

          <div className="footer_links">
            <h3>Links Rápidos:</h3>
            <ul>
              <li>
                <a href="">Sobre Nos</a>
              </li>
              <li>
                <a href="">Objectivo</a>
              </li>
              <li>
                <a href="">Vidas Slavas</a>
              </li>
              <li>
                <a href="">Antes & Depoois</a>
              </li>
              <li>
                <a href="">Como Ajudar</a>
              </li>
            </ul>
          </div>
          <div className="footer_contacts-client">
            <h2>Contactos</h2>
            <p>Telefone:</p>
            <p>Email:</p>
          </div>
        </div>

        <div className="footer_second">
          <div className="footer_trademark">
            <p>&copy; 2026 Cantinho Do Amor. Todos os direitos reservados.</p>
          </div>

          <div className="footer_socials-my">
            <p>
              Feito com <HeartIcon size={20} /> por Bruno Pernão
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
