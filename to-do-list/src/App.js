import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const url = "http://localhost:3000/tarefas";

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
    httpConfig(task, "PATCH");
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Lista de tarefas</h1>
      </div>

      <div className="App-main">
      <svg data-testid="DeleteIcon"></svg>
        <div className="newTask">
          <form onSubmit={handleForm}>
            <label htmlFor="task">Nova tarefa:</label>
            <input
              type="text"
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
              id="task"
            />
            <svg data-testid="EditIcon"></svg>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
