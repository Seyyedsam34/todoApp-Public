import React from "react"
import { Task } from "../App"
export interface Prop{
    tasks:Task[],
    taskSelect:(task:Task|null)=>void
}

function ListShow({tasks,taskSelect}:Prop){
    const handelEdite=(task:Task)=>{
        taskSelect(task)
    }
    return(
    <>
    <ul>
        {tasks.map((task)=>(
            <li key={task.id}>
                <div key={task.id}>{task.title}</div>
                <button onClick={()=>handelEdite(task)}>
                    Edite</button>
            </li>
        ))}
    </ul>
    </>
    )
}
export default ListShow