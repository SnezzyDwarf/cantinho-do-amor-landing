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
            Resgatamos, Cuidamos, Tratamos e Procuramos Famílias responsáveis
            para cada patinha que cruza o nosso caminho!
          </p>
        </div>

        <div className="container-objective--box">
          <div className="container-objective--box_content">
            <SearchIcon size={65} className="objective-icon" />
            <div className="container-objective--box_content-text">
              <h3>Resgatar e Proteger</h3>
              <p>
                Porque nenhum gatinho devia enfrentar o mundo sozinho.
                Resgatamos aqueles deixados para trás, e damos o primeiro passo:
                um cantinho onde possam finalmente chamar de casa
              </p>
            </div>
          </div>

          <div className="container-objective--box_content">
            <VetIcon size={65} className="objective-icon" />
            <div className="container-objective--box_content-text">
              <h3>Cuidados Veterinários</h3>
              <p>
                Cuidamos das feridas que se veem… e das que não se veem. Aqui,
                cada gatinho encontra tratamento, colo e tempo para voltar a
                confiar
              </p>
            </div>
          </div>

          <div className="container-objective--box_content">
            <HouseIcon size={65} className="objective-icon" />
            <div className="container-objective--box_content-text">
              <h3>Adoção Responsável</h3>
              <p>
                Acreditamos em finais felizes, mas também em escolhas
                conscientes.Por isso, procuramos famílias que amem de verdade,
                compreendam o compromisso e ofereçam o melhor a cada gatinho.
              </p>
            </div>
          </div>

          <div className="container-objective--box_content">
            <HeartIcon size={65} className="objective-icon-heart" />
            <div className="container-objective--box_content-text">
              <h3>Consciencialização</h3>
              <p>
                Educar é salvar. Sensibilizamos a comunidade para a adoção
                responsável, o respeito pelos animais e a importância da
                esterilização/castração
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
