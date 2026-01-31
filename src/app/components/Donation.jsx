import "../styles/Donation.css";

export default function Donation() {
  return (
    <>
      <section className="donation_section">
        <div className="donation_section-title">
          <h2>Como Ajudar</h2>
          <p>Dá trabalho. Dá despesa e muita. Mas salvamos vidas </p>
          <p>E se cada vida importa, cada ajuda também!</p>
        </div>

        <div className="donation_content">
          <div>
            <p className="donation_content-text">
              Este projeto é 100% independente Não somos nenhuma associação Não
              recebemos apoio financeiro externo Apenas ajudas generosas de
              vocês que, mesmo à distância, fazem parte destas histórias
            </p>
          </div>
          <div className="donation_content-contact">
            <p>
              Ajuda-nos a continuar a ajudar <br />
              1€ faz a diferença na vida deles <br />
            </p>
            <p>
              MBWAY: 926 954 995 <br />
              IBAN: 003600579910008204986
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
