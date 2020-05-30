import React, {useState} from 'react';

import './App.css';


function TodoForm(props) {

  const[task, setTask] = useState("");
  const onTaskChanged = (e)=>{
    setTask(e.target.value);
  }
  const onCreateTaskClicked = (task)=>{
    props.onCreateTaskClicked(task);
    console.log("Form: onCreateTaskClicked lauched");
  }
  return (
    <div className="App">
      <input type="text" onChange={event => onTaskChanged(event)} valuse={task}/>
      <button onClick={()=>onCreateTaskClicked(task)} disabled = {task.trim() === ""}>Add</button>

    </div>
  );
}

export default TodoForm;
