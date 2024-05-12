import  { useState } from "react"
import InputValue from "./Components/InputValue"
import ListShow from "./Components/ListShow"
import React from "react"
export interface Task{
    id:number,
    title:string
}

function App(){
    const[tasks,setTask]=useState<Task[]>([])
    const[selectTask,setSelectTask]=useState<Task |null>(null)
    const onAdd=(value:string)=>{
        if(selectTask){
            setTask(
                tasks.map((item:Task)=>(item.id===selectTask.id?{...item,title:value}:item))
            )
            setSelectTask(null)
        }else{
            const newTask:Task={
                id:Math.floor(Math.random()*10000), 
                title:value
            }
            setTask([...tasks,newTask])
        }
    }
    const taskSelect=(task)=>{
        if(task){
            setSelectTask(task)
        }
    }
    // const handelAdd=(value:sting)=>{
    //     if(selectTask){
    //         const updateTasks=tasks.map((task)=>task.id===selectTask.id?{...task,title:value}:task)
    //         setSelectTask(updateTasks)
    //         setSelectTask(null)
    //     }
    // }
    return(
        <>
        <InputValue onAdd={onAdd} sendUpdate={selectTask}/>
        <ListShow tasks={tasks} taskSelect={taskSelect}/>
        </>
    )
}

export default App


