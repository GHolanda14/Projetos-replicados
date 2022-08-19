import { useReducer } from "react";
import criarMembro from '../model/member.model';

const INITIAL_FORM_STATE = {
  nome: "",
  email: "",
  senha: ""
}


//Função para decidir o que acontece quando o dispatch for chamado
const formReducer = (state,action) => {
  const {type,valores} = action; //desestruturando o action

  switch(type){
    case "ALTERAR_VALOR":
      return{
        ...state,
        ...valores
      }
    case "ADD_USUARIO":
      return INITIAL_FORM_STATE
  }
}

export const Form = () => {
  //dispatchForm vai ser o "setForm" para alterarmos o form
  const [form, dispatchForm] = useReducer(formReducer,INITIAL_FORM_STATE);

  const handleChange = (e) =>{
    const {name, value} = e.target;//Desestruturando o evento

    dispatchForm({
      type: "ALTERAR_VALOR",
      valores: {
        [name]: value//Precisa colocar o [] se não ele não considera
      } 
    })   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, value} = e.target;
    criarMembro(form);
    dispatchForm({
      type: "ADD_USUARIO"
    })   
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Tech Form</h1>
        <div>
          <label>
            <span>Nome: </span>
            <input type="text" name="nome" value={form.nome} onChange={handleChange}/>
          </label>
          <label>
            <span>Email:</span>
            <input type="email" name="email" value={form.email} onChange={handleChange}/>
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" name="senha" value={form.senha} onChange={handleChange}/>
          </label>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
        <button type="reset" className="clear-button">Limpar</button>
      </form>
  )
}