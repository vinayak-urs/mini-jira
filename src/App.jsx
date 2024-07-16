
import './App.css'
import TaskForm from "./components/Task";
import TaskColums from './components/TaskColums.jsx';

import todoLogo from "./assets/direct-hit.png";
import doneLogo from "./assets/check-mark-button.png";
import inProgressLogo from "./assets/glowing-star.png"



function App() {

  return (
    <div className="app">
      <TaskForm />
      <main className="appBody">
        <TaskColums heading={"Todo"} logo={todoLogo} />
        <TaskColums heading={"In Progress"} logo={inProgressLogo} />
        <TaskColums heading={"Done"} logo={doneLogo} />
      </main>
    </div>
  );
}

export default App
