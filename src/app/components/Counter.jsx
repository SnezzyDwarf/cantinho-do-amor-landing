import { useState, useEffect, useRef } from "react";
import "../styles/Counter.css";
import CatIcon from "../assets/Ui/CatIcon";
import RainbowIcon from "../assets/Ui/Rainbow";
import HeartIcon from "../assets/Ui/HeartIcon";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const countsRef = useRef([0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // dispara só uma vez
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const targets = [199, 185, 9];
    const steps = 48;
    const incs = targets.map((t) => Math.max(1, Math.ceil(t / steps)));

    const interval = setInterval(() => {
      setCount1((prev) => {
        const next = Math.min(prev + incs[0], targets[0]);
        countsRef.current[0] = next;
        return next;
      });

      setCount2((prev) => {
        const next = Math.min(prev + incs[1], targets[1]);
        countsRef.current[1] = next;
        return next;
      });

      setCount3((prev) => {
        const next = Math.min(prev + incs[2], targets[2]);
        countsRef.current[2] = next;
        return next;
      });

      if (
        countsRef.current[0] >= targets[0] &&
        countsRef.current[1] >= targets[1] &&
        countsRef.current[2] >= targets[2]
      ) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section id="counter" className="impact_box" ref={sectionRef}>
      <div className="impact_box-text">
        <h2>Nosso Impacto</h2>
        <p>
          Estes números representam vidas transformadas e segundas chances
          concedidas
        </p>
      </div>

      <div className="impact_container">
        <div className="impact_container-box">
          <CatIcon size={70} className="impact-icon" />
          <div className="impact_container-box_text">
            <h2>{count1}</h2>
            <p>Gatos Salvos</p>
          </div>
        </div>

        <div className="impact_container-box">
          <HeartIcon size={70} className="impact-icon" />
          <div className="impact-container-box_text">
            <h2>{count2}</h2>
            <p>Gatos Adotados</p>
          </div>
        </div>

        <div className="impact_container-box">
          <RainbowIcon size={70} className="impact-icon" />
          <div className="impact-container-box_text">
            <h2>{count3}</h2>
            <p>Nunca Esquecidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
