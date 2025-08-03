import React,{useEffect}from 'react'
import Sidebar from './sidebar'
import { Navigate, Outlet, useLocation,useNavigate } from 'react-router-dom'
import Axios from 'axios'

function bloodbank() {
  const navigate  = useNavigate();
  const location = useLocation();
  console.log(location);
  Axios.defaults.withCredentials = true;
  // if(location.pathname === '/bloodbank' || location.pathname === '/bloodbank/')
  //   {
  //     console.log("yes");
  //     return <Navigate to={"/bloodbank/request"} />
  //   }

  
  return (
    

    <div className='flex' >
       
        <Sidebar name = 'Bloodbank 1' />
        
       <Outlet />

      
    </div>

        
    
  )
}

export default bloodbank