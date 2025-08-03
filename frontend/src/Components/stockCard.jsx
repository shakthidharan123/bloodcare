import {React,useEffect, useState} from 'react'
// import {card1data} from '../Data/stockData'
import './card1.css'
import Blood from '../assets/blood.jpeg'
import Sidebar from './sidebar'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'


const stockCard = ()=> {
  const [request,setRequest] = useState([]);
  const navigate=useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(()=>{
    Axios.get('http://localhost:8081/bloodbank/login').then(
      (res)=>{
        console.log(res.data);  
        if(res.data.isLoggedIn){
          console.log("Welcome")
          Axios.get('http://localhost:8081/bloodbank/stock').then((res)=>{
            console.log(res.data);
            setRequest(res.data);
          })
        }else{
          navigate('/blogin');
        }
      }
    ).catch((err)=>console.log(err));
  },[])
    
  return (
    <div className='flex'>
        <Sidebar />
    <div className='flex flex-col'>
    <div>
        <h1 className=' ml-24 mt-8  text-4xl font-bold mb-10'>BLOOD STOCK</h1>
    </div>
   
    <div className='outer'>
        {request.map((item)=>{
            return(
                
            <div className='card'>
              <img src={Blood} className='bl'alt='None'></img>  
            <h2 className='title'>{item.Blood_type}</h2>
            <p className='text'>Available unit:{item.Amount_available}</p>
            </div>
            )
        })}
    </div>

    </div>
    </div>
  )
}

export default stockCard