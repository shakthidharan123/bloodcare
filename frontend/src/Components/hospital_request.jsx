import React from 'react'
import Sidebar from '/Projects/bloodbank1/frontend/src/Components/sidebar'
import hospital from '../assets/hospital1.jpeg'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function hospital_request() {
  const [formData,setFormdata] = useState({
    id:'',
    name:'',
    gender:'',
    btype:'',
    date:''

  });
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect(()=>{
        Axios.get('http://localhost:8081/hospital/login').then(
          (res)=>{
            console.log(res.data);  
            if(res.data.isLoggedIn){
              console.log("Welcome")
              
            }else{
              navigate('/hlogin');
            }
          }
        ).catch((err)=>console.log(err));
      },[])

      const handleInput = (event)=>{
        setFormdata({...formData,[event.target.name]:event.target.value});
        console.log(formData);
      }

      const handleSubmit = (event)=>{
        event.preventDefault();
        Axios.post("http://localhost:8081/hospital/request",formData,{withCredentials:true}).then((res)=>{
          toast.success("Request Sent successfully!");
          console.log("Data inserted");
        }).catch((err)=>{console.log(err)
          toast.error("Incorrect details!");
        });
        

      }
   
  return (
    <div className='flex gap-10'>
    
    <Sidebar name='Hospital1'/>

  
   <div className={`w-[40%] flex justify-center  items-center  ml-32`}>
        
        <img className='border p-10  shadow-md rounded-md h-[60%] w-[80%]' src={hospital} alt="error"></img>
        
        
    </div>
    <div className='flex flex-col items-start h-screen  flex-2 justify-evenly'>
        <div className='ml-20  '>
        <h1 className=' text-center font-bold text-3xl'>BLOOD REQUEST FORM</h1>
        </div>
        
        
    
    <div className='form-container mb-20'>
        <form>
        <div className=" mb-4" >
            <label className='label'>Patient Id</label>
            <input  type='text' name='id' required onChange={handleInput} className="input" ></input>
            </div>
            <div className=" mb-4" >
            <label className='label'>Patient Name</label>
            <input  type='text' name='name' required onChange={handleInput} className="input" ></input>
            </div>
            <div className="mb-5">
            <label className='label'>Gender</label>
            <label className="text-l  mr-6 ml-10">
                <input className = 'mr-4'type="radio" onClick={handleInput} name="gender" value="male"></input>
                Male
            </label>
            <label className='text-l  mr-6'>
                <input type="radio" className = 'mr-4' onClick={handleInput} name="gender" value="Female"></input>
                Female
            </label>
            <label>
                <input type="radio" className = 'mr-4'  onClick={handleInput} name="gender" value="other"></input>
                Other
            </label>
            </div>
           
           <div className='mb-5'>
           <label className='label'>Blood Type</label>
            <select onClick={handleInput} className="border border-black rounded"id='btype' name='btype'>
                <option value=''></option>
                <option value='O+ve'>O+ve</option>
                <option value='A+ve'>A+ve</option>
                <option value='B+ve'>B+ve</option>
                <option value='AB+ve'>AB+ve</option>
                <option value='O-ve'>O-ve</option>
                <option value='A-ve'>A-ve</option>
                <option value='AB-ve'>AB-ve</option>
                <option value='B-ve'>B-ve</option>
            </select>
           </div>
           <div className='mb-5'>
            <label className='label'>Requried Quantitiy</label>
            <input type='text'onChange={handleInput} name='quantity' required className='input'></input>
           </div>
           <div className='mb-5'>
            <label className='label'>Date</label>
            <input type='date' name='date' onChange={handleInput} className='border border-black'></input>
           </div>
           <div>
            <button onClick={handleSubmit} className=' border-black *
             px-4 py-2 rounded-full text-white  bg-emerald-500  text-xl  'type='submit'>Submit</button>
           </div>
           

        </form>
    </div>
    </div>
    </div>
    
  )
}

export default hospital_request