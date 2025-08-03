import React from 'react'
import { IoClose } from "react-icons/io5";
import{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function campModal({open,close}) {
  const [formData,setFormData] = useState(
    {
      id:'',
      name:'',
      location:'',
      date:''
        

    }
)

const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/bloodbank/add_camp',formData,{withCredentials:true}).then((res)=>{
        console.log(res.data);
       // toast.success("Campaign added successfully!");
       window.location.reload();
    }).catch((err)=>{
      toast.error("Error");
      console.log(err)
    });
}

const handleInput = (event) =>{
    const {name,value} = event.target;
    setFormData({...formData,[name]:value});
    console.log(formData)
}
    if(!open) return null
  return (
    
    <div className='ml-10 mb-20 border absolute top-0 left-0 min-h-screen w-[95%] flex justify-center items-center flex-col  backdrop-blur-md p-10'>
      <div className='border  rounded-2xl border-black p-20  relative shadow-md'>

        <IoClose onClick={()=> close(false)} className=' absolute top-1 left-0 cursor-pointer ml-3 text-3xl self-start' />
        <form>
            <div className=" mb-4" >
            <label className='label'>Campaign ID</label>
            <input  type='text' required className="input" name="id" onChange={handleInput}></input>
            </div>

            <div className=" mb-4" >
            <label className='label'>Campaign Name</label>
            <input  type='text' required className="input" name="name" onChange={handleInput} ></input>
            </div>
            
           
           
           <div className='mb-5'>
            <label className='label'>Location</label>
            <input type='text' required className='input' name="location" onChange={handleInput}></input>
           </div>

           

           <div className='mb-5'>
            <label className='label'>Date</label>
            <input type='date' className='border border-black' name="date" onChange={handleInput}></input>
           </div>
           
           

           <div>
            <button className=' border-black *
             px-4 py-2 rounded-full text-white  bg-emerald-500  text-xl  'type='submit' onClick={handleSubmit}>Submit</button>
           </div>
           

        </form>
        </div>
    </div>

  )
}

export default campModal