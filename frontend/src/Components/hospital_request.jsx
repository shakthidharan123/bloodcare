import React from 'react'
import Sidebar from 'D:/Projects/bloodbank1/frontend/src/Components/sidebar'
import hospital from '../assets/hospital1.jpeg'
import { useState } from 'react'
function hospital_request() {
   
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
            <label className='label'>Patient Name</label>
            <input  type='text' required className="input" ></input>
            </div>
            <div className="mb-5">
            <label className='label'>Gender</label>
            <label className="text-l  mr-6 ml-10">
                <input className = 'mr-4'type="radio" name="gender" value="male"></input>
                Male
            </label>
            <label className='text-l  mr-6'>
                <input type="radio" className = 'mr-4' name="gender" value="Female"></input>
                Female
            </label>
            <label>
                <input type="radio" className = 'mr-4' name="gender" value="transgender"></input>
                Transgender
            </label>
            </div>
           
           <div className='mb-5'>
           <label className='label'>Blood Type</label>
            <select className="border border-black rounded"id='btype' name='btype'>
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
            <input type='text' required className='input'></input>
           </div>
           <div className='mb-5'>
            <label className='label'>Date</label>
            <input type='date' className='border border-black'></input>
           </div>
           <div>
            <button className=' border-black *
             px-4 py-2 rounded-full text-white  bg-emerald-500  text-xl  'type='submit'>Submit</button>
           </div>
           

        </form>
    </div>
    </div>
    </div>
    
  )
}

export default hospital_request