import "./Game.css";

import React, { useState, useRef } from "react";

const Game = ({
  categEscolhida,
  letras,
  pontos,
  tentativas,
  acertos,
  erros,
  checaLetra,
}) => {
  const [letra, setLetra] = useState("");
  const letraInput = useRef(null);

  const pegarForm = (e) => {
    e.preventDefault();
    checaLetra(letra);
    setLetra("");
    letraInput.current.focus();
  };
  return (
    <div className="jogo">
      <div className="pontos">
        <p>
          Pontuação: <span>{pontos}</span>
        </p>
      </div>
      <div className="dicas">
        <h1>Adivinhe a palavra:</h1>
        <h3>
          Dicas sobre a palavra: <span>{categEscolhida}</span>
        </h3>
      </div>
      <p>Você ainda tem {tentativas} tentativa(s)</p>
      <div className="palavraContainer">
        {letras.map((l, i) =>
          acertos.includes(l) ? (
            <span className="letra" key={i}>
              {l}
            </span>
          ) : (
            <span className="vazio" key={i}></span>
          )
        )}
      </div>
      <div className="letraContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={pegarForm}>
          <input
            type="text"
            maxLength="1"
            onChange={(e) => setLetra(() => e.target.value)}
            value={letra}
            ref={letraInput}
            required
          />
          <button type="submit">Tentar</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas:</p>
        {erros.map((l, i) => (
          <span key={i}>{l}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
