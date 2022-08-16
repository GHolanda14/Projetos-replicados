import { useState } from "react";
import "./QuizCard.css";

const QuizCard = (props) => {
  let todasAlternativas = props.alternativas.map((a)=> a.resposta);
  todasAlternativas = todasAlternativas.sort(() => Math.random() - 0.5);
  const [respostaAtual, setrespostaAtual] = useState("");
  
  const handleForm = (e) => {
    e.preventDefault();
    props.checarResposta(respostaAtual);
  };

  return (
    <div className="quiz">
      <div className="pergunta">
        <h1>
          Questão {props.questaoAtual + 1}/{props.qtdQuestoes}
        </h1>
        <h3>{props.pergunta}</h3>
      </div>
      <div className="alternativas">
        <form onSubmit={handleForm}>
          {todasAlternativas.map((a, i) => (    
            <button
              type="submit"
              key={i}
              value={a}
              onClick={(e) => setrespostaAtual(()=>e.target.value)}
            >
              {a}
            </button>
          ))}
        </form>
      </div>
    </div>
  );
};

export default QuizCard;
