import { useState } from "react";

export const TaskCreator=({createNewTAsk})=>{
   // console.log(props);
    const[newTaskName,setNewTaskName]=useState('')//una variable y una funcion
    const handleSubmit=(e)=> {
    e.preventDefault();
    createNewTAsk(newTaskName)
    //localStorage.setItem('tasks',newTaskName)
    setNewTaskName('')
  }

return(
    <form onSubmit={handleSubmit}>
        <input 
            type = 'text'
            placeholder = 'Ingresar un tarea'
            value={newTaskName}
            onChange = {(e) => setNewTaskName(e.target.value)}
            />       
        <button>Guarda Tarea</button>
    </form>
)

}