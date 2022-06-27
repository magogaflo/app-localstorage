import { TaskCreator } from './componets/TaskCreator';
import './App.css';
import { TaskTable } from './componets/TaskTable';
import { useState,useEffect } from 'react';


function App() {
    //es un arreglo vacio el useState
    const [tasksItem, setTasksItem] = useState([])
    function createNewTAsk(taskName){
      //console.log(taskName);
      if(!tasksItem.find(task=>task.name===taskName)){
          setTasksItem([...tasksItem,{name:taskName,done:false}]) //esto guarda      
      }//objeto     
      }
      useEffect(()=>{
       let data=localStorage.getItem('tasks')
       if(data){
        setTasksItem( JSON.parse(data))
       }
      },[])
      useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasksItem))
      },[tasksItem])
      
  return (
    <div className="App" >
      <TaskCreator createNewTAsk={createNewTAsk}/>
      <TaskTable tasks={tasksItem}/>
    </div >
  );
}

export default App;