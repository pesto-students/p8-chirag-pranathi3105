import AppCss from './App.css';
import { useEffect, useState } from 'react';

function App() {
  const initialValue = [
    {"value":"Task1","complete":true}, {"value":"Task2","complete":true},{ "value":"Task3","complete":true}
  ]
  const [task,setTask] = useState("");
  const [taskList,setTaskList] = useState(initialValue);
  function addTask()
  {
    if(task!=="")
    {
    const newTaskList = taskList.concat({"value":task,"complete":false});
    setTaskList(newTaskList);
    setTask('');
   }
  }
  const checkboxOnclickHandler = (value)=>{
    let mapped = taskList.map(innertask => {
      return innertask.value === value ? { ...innertask, complete: !innertask.complete } : { ...innertask};
    });
    setTaskList(mapped);
  };
  useEffect(()=>{
   return checkboxOnclickHandler();
   },[]);
  return (
    <div className="App">
      <h1>
       TODO List
      </h1>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter Task..."/>
      <button onClick={()=>
        addTask()
      }>Add</button>
      <div>
      {taskList.map((todo) => {
       return <div className={todo.complete ? "strike" : ""}>{todo.value}<input id='chk' type="checkbox" onChange={()=>checkboxOnclickHandler(todo.value)} name={todo.value} checked={todo.complete ? "strike" : ""}/></div>;
     })}
     </div>
    </div>
  );
}

export default App;
