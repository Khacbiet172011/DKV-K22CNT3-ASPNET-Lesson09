import './App.css';
import {React,useEffect,useState} from 'react'
import axios from 'axios';
import dkvStudenlist from './components/dkvStudenlist';


function dkvApp() {

const [dkvStudenlist, setdkvStudenList]=useState([]);
const dkvGetStudent = async () => {
  try {
    const response = await axios.get("https://666a5d097013419182ceff5e.mockapi.io/api/dkvv1/dkvStudent");
    setdkvStudenList(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {
  dkvGetStudent();
}, []);
  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook</h2>
      <hr/>
      <dkvStudenlist renderdkvStudentList = {dkvStudenlist}/>
    </div>
  );
}

export default dkvApp;
