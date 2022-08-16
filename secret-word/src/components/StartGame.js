import  './StartGame.css'

import React from 'react'

const StartGame = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão para jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartGame