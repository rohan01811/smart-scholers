import { useState,useEffect } from 'react'

import './todo.css'

import { NavLink } from 'react-router-dom';
import axios from 'axios';


function TodoApp() {
  const [iptodo, setiptodo] = useState(" ")
  const [iptodos, setiptodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('/api/todo');
        const formatted = res.data.map(todo => ({
          id: todo._id,
          iptodo: todo.title,
          isCompleted: todo.completed
        }));
        setiptodos(formatted);
      } catch (error) {
        console.error("❌ Error fetching todos:", error);
      }
    };
  
    fetchTodos();
  }, []);
  
  const clearAll = async () => {
    try {
      await axios.patch('/api/todo/clear');
      setiptodos([]);
      console.log('Todos archived (cleared visually)');
    } catch (error) {
      console.error('Error clearing todos:', error);
    }
  };


  const saveToLS=()=>{
    localStorage.setItem("iptodos",JSON.stringify(iptodos));
  }

  const handleEdit=(e,id)=>{
    let t = iptodos.filter(item => item.id === id);
    if (t.length > 0) {
      setiptodo(t[0].iptodo);
    }

    let newTodos=iptodos.filter(item=>{
      return item.id!==id
     });
     setiptodos(newTodos)
     saveToLS(newTodos);
  }

  const handleDelete=(eve,iid)=>{
    let id=iid;
    console.log(`The id of delete is ${id}`)

    let index=iptodos.findIndex(item=>{
      return item.id===id;
     })    
     console.log(index)
     let newTodos=
     iptodos.filter(item=>{
      return item.id!==id
     });
    //  newTodos[index].isCompleted=!newTodos[index].isCompleted;
     setiptodos(newTodos)
     console.log(newTodos)
     saveToLS(newTodos);

     

  }
  const handleAdd = async () => {
    try {
      const response = await axios.post('/api/todo', {
        title: iptodo,description: '',completed:false,isDeleted: false,createdAt: new Date()
      });
  
      const newTodoFromDB = response.data.todo;
  
      setiptodos([...iptodos, {
        id: newTodoFromDB._id,
        iptodo: newTodoFromDB.title,
        isCompleted: newTodoFromDB.completed
      }]);
  
      setiptodo("");
    } catch (error) {
      console.error("❌ Error adding todo to database:", error);
    }
  };
  
  const handleChange=(e)=>{
   setiptodo(e.target.value)
  }

  const handleCheckbox = async (ev) => {
    const id = ev.target.name;
    const index = iptodos.findIndex(item => item.id === id);
    const updatedStatus = !iptodos[index].isCompleted;
  
    try {
      // Send to backend
      await axios.patch(`/api/todo/${id}`, {
        completed: updatedStatus,
      });
  
      // Update UI
      const newTodos = [...iptodos];
      newTodos[index].isCompleted = updatedStatus;
      setiptodos(newTodos);
    } catch (error) {
      console.error("❌ Error updating todo completion:", error);
    }
  };
  
  

  return (
    <>
     <div className="navbar7">
            <div className="name7">
            SMART SCHOLARS
            </div>

            <div className="log_buttons7">
               <NavLink to={"/"}><button>Home</button></NavLink>
                <NavLink to={"/login"}><button>LogIn</button></NavLink>

                <NavLink to={"/signup"}><button>Signup</button></NavLink>
                  <NavLink to={"/history"}><button>History</button></NavLink>
               
            </div>
            
        </ div>

      <div className="container7">
       
     
       <div className="add-todo7">
        
          <h1>Add TODO</h1>
         

          <div className="ip7">
          <textarea onChange={handleChange} value={iptodo} type="text" className='textarea7' />
          <button className="addbtn7" type="submit" onClick={handleAdd}>Save</button></div></div>
         
         
          <div className="des7">
            <h2>Your Todo</h2>
          
        <div className="todos7">
          {iptodos.length===0 && <h3 className='no-todo'>No TODO to display</h3>}
          {iptodos.map(item=>{
         return <div className="ans7">
         <div className="left-section7">
           <input type="checkbox" value={item.isCompleted} onChange={handleCheckbox}  name={item.id} />
           <div className={item.isCompleted ? 'Work_done' : "not done"}>{item.iptodo}</div>
         </div>
       
         <div className="btns7">
           <button className="addbtn7" onClick={(e)=>handleEdit(e,item.id)}>Edit</button>
           <button className="addbtn7" onClick={(eve) => handleDelete(eve, item.id)}>Delete</button>
         </div>

        
       </div>})}
       {iptodos.length!=0 &&<div className="btn7" onClick={clearAll}>Clear All</div>}
      
        </div>
        </div>
       </div>
     
       
    </>
  )
}

export default TodoApp;
