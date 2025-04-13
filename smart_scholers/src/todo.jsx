import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './todo.css'
import Navbar from './components/navbar'
import {v4 as uuidv4} from 'uuid';

function todoApp() {
  const [iptodo, setiptodo] = useState(" ")
  const [iptodos, setiptodos] = useState([])

  const handleEdit=(e,id)=>{
    let t = iptodos.filter(item => item.id === id);
    if (t.length > 0) {
      setiptodo(t[0].iptodo);
    }

    let newTodos=iptodos.filter(item=>{
      return item.id!==id
     });
     setiptodos(newTodos)
  }

  const handleDelete=(eve,iid)=>{
    let id=iid;
    console.log(`The id of delete is ${id}`)

    let index=iptodos.findIndex(item=>{
      return item.id===id;
     })    
     console.log(index)
     let newTodos=iptodos.filter(item=>{
      return item.id!==id
     });
    //  newTodos[index].isCompleted=!newTodos[index].isCompleted;
     setiptodos(newTodos)
     console.log(newTodos)

  }
 
  const handleAdd=()=>{
  setiptodos([...iptodos,{id:uuidv4(),iptodo,isCompleted:false}])
   setiptodo("")
  }

  const handleChange=(e)=>{
   setiptodo(e.target.value)
  }

  const handleCheckbox =(ev) => {
    let id=ev.target.name;
    console.log(`The id is ${id}`)
   let index=iptodos.findIndex(item=>{
    return item.id===id;
   })    
   console.log(index)
   let newTodos=[...iptodos];
   newTodos[index].isCompleted=!newTodos[index].isCompleted;
   setiptodos(newTodos)
   console.log(newTodos)
  }
  

  return (
    <>
      <Navbar/>

      <div className="container">
       
     
       <div className="add-todo">
        
          <h1>Add TODO</h1>
          <div className="ip">
          <textarea onChange={handleChange} value={iptodo} type="text" className='textarea' />
          <button className="addbtn" type="submit" onClick={handleAdd}>Save</button></div></div>
         
         
          <div className="des">
            <h2>Your Todo</h2>
          
        <div className="todos">
          {iptodos.length===0 && <h3 className='no-todo'>No TODO to display</h3>}
          {iptodos.map(item=>{
         return <div className="ans">
         <div className="left-section">
           <input type="checkbox" value={item.isCompleted} onChange={handleCheckbox} name={item.id} />
           <div className={item.isCompleted ? 'Work_done' : "not done"}>{item.iptodo}</div>
         </div>
       
         <div className="btns">
           <button className="addbtn" onClick={(e)=>handleEdit(e,item.id)}>Edit</button>
           <button className="addbtn" onClick={(eve) => handleDelete(eve, item.id)}>Delete</button>
         </div>
       </div>})}
     
        </div>
        </div>
       </div>
     
       
    </>
  )
}

export default todoApp;
