import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import StartGame from "./components/StartGame";
import GameOver from "./components/GameOver";

import { wordsList } from "./data/words.js";

const stages = [
  { id: 1, nome: "start" },
  { id: 2, nome: "game" },
  { id: 3, nome: "end" },
];

const qtdTentativas = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].nome);
  const [categEscolhida, setCategEscolhida] = useState("");
  const [letras, setLetras] = useState("");

  const [pontos, setPontos] = useState(0);
  const [tentativas, setTentativas] = useState(qtdTentativas);

  const [acertos, setAcertos] = useState([]);
  const [erros, setErros] = useState([]);


  const pegarPalavraECategoria = useCallback(() => {
    const categorias = Object.keys(wordsList);
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];

    const palavra =
      wordsList[categoria][
        Math.floor(Math.random() * wordsList[categoria].length)
      ];
    const palavraNormal = palavra.toLowerCase();

    return { categoria, palavraNormal };
  },[]);

  const checaLetra = (letra) => {
    const letraNormal = letra.toLowerCase();

    if (acertos.includes(letraNormal) || erros.includes(letraNormal)) {
      return;
    }

    if (letras.includes(letraNormal)) {
      setAcertos(() => [...acertos, letraNormal]);      
    } else {
      setErros(() => [...erros, letraNormal]);
      setTentativas(() => tentativas - 1);
    }
  };

  const limparArrays = () => {
    setAcertos([]);
    setErros([]);
  };

  useEffect(() => {
    if (tentativas <= 0) {
      limparArrays();
      setGameStage(() => stages[2].nome);
    }
  }, [tentativas]);

  const startGame = useCallback(() => {
    limparArrays();
    const { categoria, palavraNormal } = pegarPalavraECategoria();
    setCategEscolhida(() => categoria);
    setLetras(() => palavraNormal.split(""));

    setGameStage(() => stages[1].nome);
  },[pegarPalavraECategoria]);

  useEffect(() =>{
    const letrasUnicas = [...new Set(letras)];
    if(letrasUnicas.length>0){

    if(letrasUnicas.length === acertos.length){
      setPontos((pontosAtuais)=> pontosAtuais + 100);
      setTimeout(()=>{
        startGame();
      },500)
      
    }
  }
  },[letras,acertos,startGame])

  const jogarDnv = () => {
    setGameStage(() => stages[0].nome);
    setTentativas(qtdTentativas);
    setPontos(0);
  }

  return (
    <div className="App">
      {gameStage === stages[0].nome && <StartGame startGame={startGame} />}
      {gameStage === stages[1].nome && (
        <Game
          categEscolhida={categEscolhida}
          letras={letras}
          pontos={pontos}
          tentativas={tentativas}
          acertos={acertos}
          erros={erros}
          checaLetra={checaLetra}
        />
      )}
      {gameStage === stages[2].nome && <GameOver jogarDnv={jogarDnv} pontos={pontos} />}
    </div>
  );
}

export default App;
