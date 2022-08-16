import "./GameOver.css";

import React from "react";

const GameOver = ({ jogarDnv, pontos }) => {
  return (
    <div className="gameOver">
      <h1>Fim de jogo!</h1>
      <h2>
        Sua pontuação foi: <span>{pontos}</span>
      </h2>
      <button onClick={jogarDnv}>Jogar Novamente</button>
    </div>
  );
};

export default GameOver;
