import React, { useState } from "react";

const ToDoList = () => {
  const [newTask, setNewTask] = useState(""); //Nueva tarea
  const [taskList, setTaskList] = useState([]); //Lista de Tareas
  const handlerChange = (event) => {
    setNewTask(event.target.value)
  }
  //Funcion Anade tareas
  const handlerTask =(event) => {
    if (event.key === "Enter" && newTask != ""){
      setTaskList([...taskList, newTask])
      setNewTask("")
    }
    else {
      alert('No hay tarea escrita')
    }
  }
  const deleteTask =(indexTask)=>{
    let newTasks = taskList.filter((tasks, index) => index !== indexTask)
    setTaskList(newTasks)
  }
  const deleteAllTask = ()=>{
    setTaskList ([])
  }
  return (
    <div className="body">
      <div className="container">
        <div className="tittle">
          <h1> My To Do List...!!!</h1>
        </div>
        <div className="entry">
          <input type="text" value={newTask} placeholder="Añadir nueva tarea"
          onChange={handlerChange} onKeyDown={handlerTask}
          />
        </div>
        <ul className="list-group">
          
            {taskList.map((task, index)=>{ 
              return <li className="list-group-item" key={index}> {task} <i className="delete fas fa-trash" onClick={() => deleteTask(index)}></i></li> 
            })}
        </ul>
      <div>{taskList.length == 0 ? 'No hay tareas': `${taskList.length} tareas pendientes`}</div>
        <button className="button" onClick={deleteAllTask}> Borrar Lista </button>
      </div>
    </div>
  );
};
export default ToDoList;
