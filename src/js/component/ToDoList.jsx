import React, { useState } from "react";

const ToDoList = () => {
  const [newTask, setNewTask] = useState(""); //Nueva tarea
  const [taskList, setTaskList] = useState([]); //Lista de Tareas
  const handlerChange = (event) => {
    setNewTask(event.target.value)
  }
  //Funcion Anade tareas
  const handlerTask =(event) => {
    if (event.key === "Enter"){
      if ( newTask.trim() != "") {
        setTaskList([...taskList, newTask])
        setNewTask("")
      }
      else {
        alert('No hay tarea escrita') //Alert de que no ha escrito nada
      }
    }
  }
  //Eliminar Tareas
  const deleteTask =(indexTask)=>{
    let newTasks = taskList.filter((tasks, index) => index !== indexTask)
    setTaskList(newTasks)
  }
  //Funcion del Boton Borrar Tareas
  const deleteAllTask = ()=>{
    setTaskList ([])
  }
  return (
    <div className="body">
      <div className="container">
        <div className="tittle">
          <h1> Mi Lista de Tareas...!!!</h1>
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
        <div>{taskList.length == 0
            ? "No hay tarea pendiente"
            : taskList.length == 1
            ? `${taskList.length} tarea pendiente`
            : `${taskList.length} tareas pendientes`}</div>
          <button className="button" onClick={deleteAllTask}> Borrar Lista </button>
      </div>
    </div>
  );
};
export default ToDoList;


/*
<div>
  {taskList.length == 0 ? `${taskList.length} "No hay tarea pendiente"`
: taskList.length == 1 ? `${taskList.length} "tarea pendiente"`
: taskList.length > 1 "tareas pendientes"}
</div>
*/
/*
<div>{taskList.length == 0 ? 'No hay tareas': `${taskList.length} tareas pendientes`}</div>
*/