import React from 'react'

const Score = (props) => {
  return (
    <div>
        <h1>{props.pontos} de {props.qtdQuestoes}</h1>
    </div>
  )
}

export default Score