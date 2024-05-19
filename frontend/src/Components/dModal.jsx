import React from 'react'
import { IoClose } from "react-icons/io5";
function dModal({open,close}) {
    if(!open) return null
  return (
    
    <div className='ml-10 mb-20 border absolute top-0 left-0 min-h-screen w-[108%] flex justify-center items-center flex-col  backdrop-blur-md p-10'>
        <div className='border border-black p-20 rounded-2xl relative shadow-md'>

        
        <IoClose  onClick={()=> close(false)} className=' absolute top-1 left-0 cursor-pointer ml-3 text-3xl self-start' />
        <form>
            <div className=" mb-4" >
            <label className='label'>Donor Name</label>
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
                Other
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
            <label className='label'>Quantitiy</label>
            <input type='text' required className='input'></input>
           </div>

           <div className='mb-5'>
            <label className='label'>Campaign ID</label>
            <input type='text' required className='input'></input>
           </div>

           <div className='mb-5'>
            <label className='label'>Date</label>
            <input type='date' className='border border-black'></input>
           </div>
           <div className='mb-5'>
            <label className='label'>Last donated</label>
            <input type='date' className='border border-black'></input>
           </div>

           <div>
            <button className=' border-black *
             px-4 py-2 rounded-full text-white  bg-emerald-500  text-xl  'type='submit'>Submit</button>
           </div>
           

        </form>
        </div>
    </div>

  )
}

export default dModal