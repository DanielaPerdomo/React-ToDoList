import React, { useState } from "react";

const ToDoList = () => {
  const [newTask, setNewTask] = useState(""); //Nuevas tareas
  const [taskList, setTaskList] = useState([]); //Lista de Tareas
  const handlerChange = (event) => {
    setNewTask(event.target.value)
  }
  const handlerTask =(event) => {
    if (event.key === "Enter"){
      setTaskList([...taskList, newTask])
      setNewTask("")
    }
  }
  const deleteTask =(indexTask)=>{
    let newTasks = taskList.filter((tasks, index) => index !== indexTask)
    setTaskList(newTasks)
  }

  return (
    <div>
    <h1> My To Do List</h1>
    <input type="text" value={newTask} placeholder="Añadir nueva tarea"
    onChange={handlerChange} onKeyDown={handlerTask}
    />
    <ul className="list-group">
      
        {taskList.map((task, index)=>{ 
          return <li className="list-group-item" key={index}> {task} <span className="ms-5" onClick={() => deleteTask(index)}>x</span></li> 
        
        })}
      
    </ul>
    </div>
  );
};
export default ToDoList;