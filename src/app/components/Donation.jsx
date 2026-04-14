import "../styles/Donation.css";
import PhoneIcon from "../assets/Ui/PhoneIcon";
import CardIcon from "../assets/Ui/CardIcon";
import CopyIcon from "../assets/Ui/CopyIcon";
import HeartIcon from "../assets/Ui/HeartIcon";
import { useState } from "react";

export default function Donation() {
  const mBWay = "966 245 228";

  const [copied, setCopied] = useState(false);

  const handleMBWay = async () => {
    try {
      await navigator.clipboard.writeText(mBWay);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar", err);
    }
  };

  return (
    <>
      <section id="donation" className="donation_section">
        <div className="donation_section-title">
          <h2>Como Ajudar</h2>
          <p>Dá trabalho. Dá despesa e muita. Mas salvamos vidas </p>
          <p>E se cada vida importa, cada ajuda também!</p>
        </div>

        <div className="donation_content">
          <div className="donation_content-up">
            <h3 className="donation_content-up-text">
              Este projeto é <strong>100% independente!</strong> <br />
              Não somos nenhuma associação. <br /> Não recebemos apoio
              financeiro externo. <br />
              Apenas ajudas generosas de vocês que, mesmo à distância, fazem
              parte destas histórias!
            </h3>
          </div>
          <div className="donation_content-contact">
            <div className="donation_content-contact-text">
              <p>
                Ajuda-nos a continuar a ajudar <br />
                1€ faz a diferença na vida deles <br />
              </p>
            </div>
            <div className="donation_content-contact-bot">
              <div className="donation_content-contact-box">
                <div className="donation_content-contact-box_content">
                  <PhoneIcon size={50} />
                  <h3>MBWAY</h3>
                  <div className="donation_contacts">
                    <p>966 245 228</p>
                    <button
                      className={!copied ? "copy_button" : "copied_button"}
                      onClick={handleMBWay}
                    >
                      <CopyIcon size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="donation_heart">
          <HeartIcon size={90} className="donate-icon" />
        </div>
      </section>
    </>
  );
}
