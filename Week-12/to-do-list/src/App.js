import './App.css';
import { useState } from 'react';

function App() {
  const [task,setTask] = useState("");
  const [taskList,setTaskList] = useState([]);
  function addTask()
  {
    const newTaskList = taskList.concat({task});
    setTaskList(newTaskList);
    setTask('');
  }
  return (
    <div className="App">
      <h1>
       TODO List
      </h1>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={()=>
        addTask()
      }>Add</button>
      
    </div>
  );
}

export default App;
