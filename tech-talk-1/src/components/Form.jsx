import { useReducer, useState } from "react";
import criarMembro from "../model/member.model";

const INITIAL_FORM_STATE = {
  nome: "",
  email: "",
  senha: "",
};

const formulario = document.getElementsByTagName("form").item;

console.log(formulario)

// formulario.addEventListener("focus",()=>{
//   setSuccess(false);
// });

//Função para decidir o que acontece quando o dispatch for chamado
const formReducer = (state, action) => {
  const { type, valores } = action; //desestruturando o action

  switch (type) {
    case "ALTERAR_VALOR":
      return {
        ...state,
        ...valores,
      };
    case "ADD_USUARIO":
      criarMembro(state);
      return INITIAL_FORM_STATE;
    case "LIMPAR":
      return INITIAL_FORM_STATE;
    default:
      return state;
  }
};

export const Form = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(true);
  //dispatchForm vai ser o "setForm" para alterarmos o form
  const [form, dispatchForm] = useReducer(formReducer, INITIAL_FORM_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target; //Desestruturando o evento

    dispatchForm({
      type: "ALTERAR_VALOR",
      valores: {
        [name]: value, //Precisa colocar o [] se não ele não considera
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(form.senha.length < 6){
      setError("A senha deve ter mais que 6 caracteres!");
      return;
    }
    setError("");
    setSuccess(true);
    dispatchForm({
      type: "ADD_USUARIO",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Tech Form</h1>
      <div>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
      <button
        type="reset"
        className="clear-button"
        onClick={() => dispatchForm({ type: "LIMPAR" })}
      >
        Limpar
      </button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Usuário cadastrado com sucesso!</p>}
    </form>
  );
};
