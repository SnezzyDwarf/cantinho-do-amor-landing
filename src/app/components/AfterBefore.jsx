import { useState } from "react";
import "../styles/AfterBefore.css";
import ArroIcon from "../assets/Ui/ArrowIcon";

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

        <div className="transformation_content">
          <div className="transformation_content-text">
            <h2>{slides[currentIndex].name}</h2>
          </div>

          <div className="transformation_content-img_box">
            <img src={slides[currentIndex].before} />

            <img src={slides[currentIndex].after} />
          </div>
        </div>
        <div className="transformation-button">
          <button onClick={prev} className="transformation-button-prev">
            prev
          </button>

          <button onClick={next} className="transformation-button-next">
            next
          </button>
        </div>
      </section>
    </>
  );
}
