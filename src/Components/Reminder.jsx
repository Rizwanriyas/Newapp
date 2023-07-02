import React, { useState } from 'react'
import './Rem.css'
function Reminder() {
    const[reminder,setReminder]=useState([])
    const[newreminder,setNewreminder]=useState("")

    const changeEvent=(event)=>{
        setNewreminder(event.target.value)
       
    }
    const addevent=()=>{
        if(newreminder.trim()){
            setReminder([...reminder,newreminder])
            setNewreminder("")
        }
    }
    const deleteEvent=(index)=>{
        setReminder(reminder.filter((item,itemindex)=> itemindex != index))
    }
  return (
    
      <div className="container">
        <h1>Reminder</h1>
        <div className="input-cont">
            <input type="text"  placeholder='Enter reminder'onChange={changeEvent} value={newreminder}/>
            <button className='add-btn'onClick={addevent}>Add Reminder</button>
        </div>
        {
            reminder.length > 0 ? (
                <ul className='rem-list'>
                {reminder.map((reminder,index)=>(
                    <li key={index}>
                        {reminder}
                        <button className='dlt-btn' onClick={()=>deleteEvent(index)}>Delete</button>
                        </li>
                ))}
                </ul>
            ): <p>No reminders</p>
        }
       
      </div>
    
  )
}

export default Reminder
