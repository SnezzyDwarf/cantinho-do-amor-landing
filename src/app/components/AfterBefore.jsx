import { useState } from "react";
import "../styles/AfterBefore.css";

export default function AfterBefore({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => {
      if (prev === slides.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return slides.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <>
      <section className="transformation_section">
        <div className="transformation_section-text">
          <h2>Histórias de Transformação</h2>
          <p>
            E são histórias como estas que nos dão forças para continuarmos. Por
            eles, sempre
          </p>
        </div>
        <div className="tansformation_layout">
          <div className="transformation_content">
            <div className="transformation_content-text">
              <h2>{slides[currentIndex].name}</h2>
            </div>

            <div className="transformation_content_box">
              <div className="transformation_box-single">
                <h3>Antes</h3>
                <img
                  src={slides[currentIndex].before}
                  width={350}
                  height={400}
                />
              </div>

              <div className="transformation_box-single">
                <h3>Depois</h3>
                <img
                  src={slides[currentIndex].after}
                  width={350}
                  height={400}
                />
              </div>
            </div>
            <div className="transformation-button">
              <div class="container">
                <button
                  class="btn"
                  onClick={prev}
                  style={{ transform: "scale(-1 , 1)" }}
                >
                  <span
                    style={{ transform: "scale(-1, 1) translate(-40%, 0%)" }}
                  >
                    Anterior
                  </span>
                </button>
              </div>
              <div class="container">
                <button class="btn" onClick={next}>
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*
        to think...
        <div className="cat">
            <div className="face">
              <div className="eye-left">
                <div className="shut-left">
                  <span></span>
                </div>
                <div className="ball-left"></div>
              </div>
              <div className="eye-right">
                <div className="shut-right">
                  <span></span>
                </div>
                <div className="ball-right"></div>
              </div>
              <div className="nose"></div>
              <div className="ear-left"></div>
            </div>
          </div> */}
      </section>
    </>
  );
}
