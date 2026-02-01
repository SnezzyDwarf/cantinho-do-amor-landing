import catHero from "../assets/images/HeroSection.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className="hero_container">
          <img src={catHero} alt="" className="hero_container-img" />
          <div className="hero_container-text">
            <h1>
              O Cantinho do Amor nasceu da vontade de salvar gatinhos que vivem
              em perigo.
            </h1>
            <p>
              Cada gatinho que resgatamos carrega uma história que merece ser
              ouvida, cuidada e reescrita com amor!
            </p>
            <a href="">
              <span>Conheça nossa missão</span>
              <div>
                <p className="arrow"></p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
