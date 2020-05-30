import React, {useState} from 'react';

import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";



function App() {
  const [todos, setTodos] = useState([{id: Math.random(), title: "Wake up at 6:00 AM", isDone: false},
    {id: Math.random(), title: "Read a book", isDone: true},
    {id: Math.random(), title: "To do Home Work", isDone: false}
  ]);
  const onCreateTaskClicked = (task)=>{
    const updatedTodos = todos.map((el) => {return(el)});

    updatedTodos.push({id:Math.random(), title: task, isDone: false});
    setTodos(updatedTodos);
    console.log("App onCreateTaskClicked lounched");
    console.log(todos);
    console.log(updatedTodos);
  }
  const onDeleteTask = (id)=>{
    const upadetedTodos = todos.filter(el=> el.id !== id);
    setTodos(upadetedTodos);
    console.log("App onDeleteTask lounched");
  }
  const onDoneTaskCheckClicked = (id) =>{
    console.log("App onDoneTaskCheckClicked lounched");
    const updatedTodos = todos.map(el=>{
      if(el.id === id) return {...el, isDone:  !el.isDone}
      else return el;
    });
    console.log(updatedTodos);

    setTodos(updatedTodos);
    console.log("App onDoneTaskCheckClicked ended");
  }
  return (
    <div className="App">
      <TodoForm onCreateTaskClicked = {onCreateTaskClicked} />
      <TodoList todos = {todos} onDeleteTask={onDeleteTask} onDoneTaskCheckClicked={onDoneTaskCheckClicked}/>
    </div>
  );
}

export default App;
