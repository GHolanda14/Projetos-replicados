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

  return (
    <div className="App">
      <div className="App-header">
        <h1>Lista de tarefas</h1>
      </div>

      <div className="tasks">
        {dados &&
          (dados.length === 0 ? (
            <h2>Não existem tarefas cadastradas!</h2>
          ) : 
          (
            <ul>          
              {dados.map((tarefa) => (
                <li
                  key={tarefa.id}
                  onClick={() => httpConfig(tarefa.id, "DELETE")}
                >
                  {tarefa.task}
                </li>
              ))}
            </ul>
        ))}
      </div>

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
