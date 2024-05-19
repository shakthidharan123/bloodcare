import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import {content,hcontent} from '../Data/hosSidebar'
import { useState } from 'react';
function sidebar(props) {
  const [openSidebar,setOpenSidebar] = useState(false);
  let actual_content = hcontent;
  actual_content = window.location.pathname === '/hospitalrequest' ? hcontent : content;
  
  
  
  return (
    <div className={`inline fixed shadow-2xl h-[100vh] hover:cursor-pointer bg-red-500 ${openSidebar ? "w-[25%]  backdrop-blur-md" : "w-[4%]"} transition-all duration-500 ease-in-out transform z-50`}>
        
        
        <div>
          {openSidebar ? <IoClose onClick={()=> setOpenSidebar(!openSidebar)} className='  ml-3 text-3xl text-white  '/> : <GiHamburgerMenu onClick={()=> setOpenSidebar(!openSidebar)} className=' text-3xl text-white ml-1 right-0 top-0'/>  }       
        
        </div>
        <div className='flex flex-col justify-between h-[98%]'>
          
        
        
        <div className='flex flex-col'>{
           actual_content.map(a => (
          <Link to={a.path}>
          <div className=' h-10 border-b flex items-center py-10 text-xl font-bold 
          hover:bg-red-300 hover:border-r-8 hover:border-r-white-600' >
            {a.icon}
            <h1 className={` text-white ${!openSidebar && "hidden" }` }>{a.name}</h1>
            </div>
            </Link>
        ))
      }
        </div>
       
      
        

        

        <div className=' border-t hover:cursor-pointer border-t-white h-10 border-b flex items-center py-10 text-xl font-bold 
        hover:bg-red-300 hover:border-r-8 hover:border-r-white-600' >
        <MdLogout className=' w-10 h-10' />
        <h1 className={` text-white ${!openSidebar && "hidden" }` }>Logout</h1>
        </div>

        </div>


        
    </div>
  )
}

export default sidebar

