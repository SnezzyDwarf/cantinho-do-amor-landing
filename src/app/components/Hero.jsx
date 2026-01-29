import catHero from "../assets/images/PlaceHolderHero.png";
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
                <p>seta</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
