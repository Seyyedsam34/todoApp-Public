import { useEffect, useState } from "react"
import { Task } from "../App"
import React from "react"
export interface Prop{
    onAdd:(value:string)=>void,
    sendUpdate:Task|null
}

function InputValue({onAdd,sendUpdate}:Prop){
    const[value,setValue]=useState<string>("")
    useEffect(()=>{
        if(sendUpdate){
            
            setValue(sendUpdate.title)
        }
    },[sendUpdate])
    const handelInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const handelSubmit=()=>{
        onAdd(value)
        setValue("")
    }

    return(
        <>
            <div>
                <input type="text" 
                    value={value}
                    onChange={handelInput}
                />
                <button id="btnsubmit" onClick={handelSubmit}>
                   {sendUpdate===null?"Submit":"Edite"
                   }
                   </button>
            </div>
        </>
    )
}
export default InputValue