

export const TaskTable=({tasks})=>{
  

    return(

        <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => (
              <tr key={task.name}>
               <td>
                {task.name}
                <input type="checkbox"
                value={task.done}//que de aqui
                
                />
               </td>
                
              </tr>

            ))
          }
        </tbody>

      </table>
    )
}