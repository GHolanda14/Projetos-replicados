import { useEffect, useState } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import Score from "./components/Score";
import { questoes } from "./data/questoes.js";

const qtdQuestoes = questoes.length;

const estados = ["game", "end"];

function App() {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [gameEstado, setGameEstado] = useState(estados[0]);
  const [pergunta, setPergunta] = useState("");
  const [alternativas, setAlternativas] = useState([]);

  const checarResposta = (resposta) => {
    let respCorreta = alternativas.filter((alternativa) => alternativa.correta);
    respCorreta[0].resposta === resposta
      ? setPontos((pontosAtuais) => pontosAtuais + 1)
      : console.log("Errou");
    proximaQuestao();
  };

  const proximaQuestao = () => {
    setQuestaoAtual((prevQuestaoAtual) =>
      prevQuestaoAtual + 1 === qtdQuestoes
        ? setGameEstado(() => estados[1])
        : prevQuestaoAtual + 1
    );
  };

  useEffect(() => {
    if (gameEstado !== estados[1]) {
      setPergunta(() => questoes[questaoAtual].pergunta);
      setAlternativas(() => questoes[questaoAtual].alternativas);
    }
  }, [questaoAtual,gameEstado]);

  return (
    <div className="App">
      {gameEstado === estados[0] && (
        <QuizCard
          pergunta={pergunta}
          alternativas={alternativas}
          qtdQuestoes={qtdQuestoes}
          questaoAtual={questaoAtual}
          pontos={pontos}
          checarResposta={checarResposta}
        />
      )}
      {gameEstado === estados[1] && (
        <Score pontos={pontos} qtdQuestoes={qtdQuestoes} />
      )}
    </div>
  );
}

export default App;
