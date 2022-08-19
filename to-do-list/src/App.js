import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/tarefas";

//Todo: Lista de tarefas concluídas;

function App() {
  const { dados, httpConfig } = useFetch(url);
  const [tarefa, setTarefa] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    let novaTarefa = {
      task: tarefa,
      done: false,
    };
    httpConfig(novaTarefa, "POST");
    setTarefa("");
  };

  const toggleTarefa = (task) => {    
    document.getElementById(task.id).classList.toggle("active");
    if(task.done){
      httpConfig(task,"PATCH");
    }else{
      setTimeout(() => {
        httpConfig(task,"PATCH");
      },500)
    }     
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Lista de tarefas</h1>
      </div>

      {dados && dados.filter((t) => !t.done).length > 0 && 
      <div className="tasks">
        {dados &&
          (dados.length === 0 ? (
            <h2>Não existem tarefas cadastradas!</h2>
          ) : 
          (
            <ul>          
              <h2>Tarefas a serem feitas: </h2>
              {dados.map((tarefa) => (
                !tarefa.done && <li
                  key={tarefa.id}
                  id={tarefa.id}
                  onClick={() => toggleTarefa(tarefa)}
                >
                  {tarefa.task}
                </li>
              ))}
            </ul>
        ))}
      </div>
}
  {dados && dados.filter((t) => t.done).length > 0 && 
      <div className="tasks">
      {dados &&
          (dados.length === 0 ? (
            <h2>Não existem tarefas cadastradas!</h2>
          ) : 
          (
            <ul>
              <h2>Tarefas feitas</h2>          
              {dados.map((tarefa) => (
                tarefa.done && <li
                  key={tarefa.id}
                  className="active"
                  id={tarefa.id}
                  onClick={() => toggleTarefa(tarefa)}
                >
                  {tarefa.task}
                </li>
              ))}
            </ul>
        ))}
      </div>
}
      <div className="newTask">
        <form onSubmit={handleForm}>
          <label htmlFor="task">Nova tarefa:</label>
          <input
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            id="task"
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default App;
