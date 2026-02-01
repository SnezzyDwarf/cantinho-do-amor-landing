import Cats from "../assets/images/CatImageAboutPlaceHolder.png";
import HeartIcon from "../assets/Ui/HeartIcon";
import IconUser from "../assets/Ui/IconUser";
import ShieldIcon from "../assets/Ui/ShieldIcon";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <section className="section_about">
        <div className="about_container">
          <img
            src={Cats}
            alt="Grupo de gatos abadonados"
            className="about_container-img"
          />

          <div className="about_container-text">
            <h2>Quem Somos</h2>
            <p>
              O Cantinho do Amor nasceu da vontade de salvar gatinhos que vivem
              em perigo, muitos deles abandonados, doentes ou sem qualquer
              proteção. Somos um projeto situado em Portalegre, formado por
              voluntários movidos por dedicação, empatia e um enorme amor pelos
              animais. Acreditamos que cada vida importa e que, com pequenos
              gestos, é possível fazer uma grande diferença. Todos os dias
              trabalhamos para resgatar, cuidar e encontrar um lar seguro para
              quem mais precisa.
            </p>
          </div>
        </div>
        <div className="about_box">
          <div className="about_box-container">
            <HeartIcon size={90} className="about-icon" />
            <h3>Amor & Cuidado</h3>
            <p>
              Cada gato recebe atenção individualizada e todo o carinho que
              merece
            </p>
          </div>
          <div className="about_box-container">
            <IconUser size={90} className="about-icon" />
            <h3>Equipe Dedicada</h3>
            <p>
              Profissionais qualificados e voluntários apaixonados trabalhando
              juntos
            </p>
          </div>
          <div className="about_box-container">
            <ShieldIcon size={90} className="about-icon" />
            <h3>Proteção Total</h3>
            <p>
              Do resgate à adoção, garantimos segurança e bem-estar em todas as
              etapas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
