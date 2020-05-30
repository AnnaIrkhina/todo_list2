import React from 'react';
import './App.css';

function TodoList(props) {
    const onDeleteTask = (id)=>{
        props.onDeleteTask(id);
    }
    const onDoneTaskCheckClicked = (id)=>{
        props.onDoneTaskCheckClicked(id);
    }
    return (
        <div>
            <ul>{
                props.todos.map(el =>

                    <li key={el.id}>{el.title}
                        <input onClick={()=>onDoneTaskCheckClicked(el.id)} type="checkbox" name={el.title} value={el.title}checked = {el.isDone}/>
                        <button onClick= {()=> onDeleteTask(el.id)}>Delete</button>
                    </li>
                )
            }


            </ul>

        </div>
    );
}

export default TodoList;
