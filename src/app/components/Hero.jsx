import catHero from "../assets/images/TrueHeroSectionImg.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className="hero_container">
          <img src={catHero} alt="" className="hero_container-img" />
          <div className="hero_container-text">
            <h1>
              Cada gatinho que resgatamos carrega uma história que merece ser
              ouvida, cuidada e reescrita com amor!
            </h1>

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
