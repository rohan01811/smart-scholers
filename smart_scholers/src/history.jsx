import { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./components/navbar";
import './history.css';

function History() {
    const [history, setHistory] = useState([]);
    
    const fetchHistory = async () => {
        try {
        const res = await axios.get('/api/todo/history');
        setHistory(res.data);
        } catch (error) {
        console.error('Error fetching history:', error);
        }
    };
    
    return (
        <div className="container">
                    <Navbar/>
        <div className="history-container">

        <h2>Todo History</h2>
        <button onClick={fetchHistory}>Fetch History</button>


      <table className="history-table">
  {/* Table headers */}
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Status</th>
      <th>Created At</th>
    </tr>
  </thead>
  <tbody>
    {history.map((item, index) => (
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.title}</td>
        <td className={item.completed ? 'completed' : 'not-completed'}>
          {item.completed ? 'Completed' : 'Not Completed'}
        </td>
        <td>{new Date(item.createdAt).toLocaleString()}</td>
      </tr>
    ))}
  </tbody>
</table>



        </div>
        </div>
    );
    }   

export default History;