import React, { useContext, useState } from "react";
import UseState from "../../../components/Ganchos/UseStateDetalhes/UseStateDetalhes";
import { AprendaContext } from "../../../context/AprendaContext";

const HookUseState = () => {
  const {nome, setNome} = useContext(AprendaContext);
  //consertar o erro q n ta mudando o nome
  return (
    <>
      <UseState />
      <div>
        <h3>Seu nome é: {nome}</h3>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
      </div>
    </>
  );
};

export default HookUseState;
