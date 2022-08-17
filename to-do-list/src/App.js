import "./App.css";
//Todo: Riscar as tarefas feitas
const id = 1;
function App() {
  
  const changeTask = (id) =>{
    let task = document.getElementById(id);
    task.style.textDecoration += "line-through";
    console.log(task.style)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Lista de tarefas</h1>
      </div>

      <div className="tasks">
        <ul>
          <li id="1" onClick={()=>{changeTask(id)}}>Montar o pc </li>
          <li>Organizar a mesa</li>
        </ul>
      </div>

      <div className="newTask">
        <form>
          <label htmlFor="task">
            Nova tarefa: 
          </label>
          <input type="text" id="task"/>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default App;
