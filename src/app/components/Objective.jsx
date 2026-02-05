import "../styles/Objective.css";
import SearchIcon from "../assets/Ui/SearchIcon";
import VetIcon from "../assets/Ui/VetIcon";
import HouseIcon from "../assets/Ui/HouseIcon";
import HeartIcon from "../assets/Ui/HeartIcon";

export default function Objective() {
  return (
    <>
      <section id="objective" className="container-objective">
        <div className="container-objective_header">
          <h2>Nosso Objectivo</h2>
          <p>
            Resgatamos, Cuidamos, Tratamos e Procuramos um Catinho para cada
            patinha que cruza o nosso caminho!
          </p>
        </div>

        <div className="container-objective--box">
          <div className="container-objective--box_content">
            <SearchIcon size={65} className="objective-icon" />
            <div className="container-objective--box_content-text">
              <h3>Resgatar e Proteger</h3>
              <p>
                Localizar e resgatar gatos em situação de maus tratos, abandono
                ou perigo nas ruas, oferecendo um refúgio seguro
              </p>
            </div>
          </div>

          <div className="container-objective--box_content">
            <VetIcon size={65} className="objective-icon" />
            <div className="container-objective--box_content-text">
              <h3>Cuidados Veterinários</h3>
              <p>
                Garantir tratamento médico completo, vacinação, castração e
                reabilitação física e emocional de todos os animais resgatados
              </p>
            </div>
          </div>

          <div className="container-objective--box_content">
            <HouseIcon size={65} className="objective-icon" />
            <div className="container-objective--box_content-text">
              <h3>Adoção Responsável</h3>
              <p>
                Encontrar lares permanentes e amorosos, com processo criterioso
                de seleção para garantir o bem-estar dos felinos
              </p>
            </div>
          </div>

          <div className="container-objective--box_content">
            <HeartIcon size={65} className="objective-icon-heart" />
            <div className="container-objective--box_content-text">
              <h3>Consciencialização</h3>
              <p>
                Educar a comunidade sobre posse responsável, prevenção de maus
                tratos e a importância da castração
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
