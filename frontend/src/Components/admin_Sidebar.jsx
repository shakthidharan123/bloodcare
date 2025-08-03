import React, { useState } from 'react'
import { FaHandHoldingWater } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { IoMdMenu } from "react-icons/io"; 
import { IoMdClose } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

function admin_Sidebar() {

  const [aside,setAside] = useState(false);

  
  return (
    <div className={`h-[100vh] bg-red-500 flex flex-col ${aside?'w-[15%]':'w-[5%]'} transition-all duration-500 ease-in-out transform z-50`}>
      <div className='mb-4 ml-2 hover:cursor-pointer  mt-2' onClick={()=>{setAside(!aside)}}>
        {aside? <IoMdClose className='h-10 w-10'/> : <IoMdMenu className='h-10 w-10' />}
        </div>
      <div className='flex flex-col text-2xl'>
      <DataBlock name={aside ?"Dashboard" : ""} icon={<MdDashboard  className={`${aside?'w-8 h-8':'w-10 h-10'}`}/>} />
        <DataBlock name={aside ?"Hospital" : ""} icon = {<FaHospitalAlt className={`${aside?'w-8 h-8':'w-10 h-10'}`} asid={aside}/>} />
        <DataBlock name={aside ?"Stock" : ""} icon={<FaHandHoldingWater className={`${aside?'w-8 h-8':'w-10 h-10'}`}/>}/>
        <DataBlock name={aside ?"BloodBank" : ""} icon={<MdLocalHospital className={`${aside?'w-8 h-8':'w-10 h-10'}`}/>} />
      </div>
      <div className=' flex flex-col  justify-end flex-grow'>
        <div className='flex mb-3 hover:cursor-pointer hover:bg-red-400'>
        <div className='ml-3 ' >
      <MdLogout className={`${aside?'w-8 h-8':'w-10 h-10'}`} /> 
      </div>
      <div className={`  ${!aside && 'hidden'} text-2xl mr-2 text-white `}>Logout</div>
      </div>
      </div>
      
    </div>
  )
}

const DataBlock = (props) => {
  return(
    <div className='flex justify-start mt-2 mb-2 hover:cursor-pointer hover:bg-red-400'>
      <div className=' mt-2 mr-4 ml-2'>{props.icon}</div>
      <div className={`text-white mb-2 mt-2`}>{props.name}</div>

      

    </div>
    
  )
}

export default admin_Sidebar