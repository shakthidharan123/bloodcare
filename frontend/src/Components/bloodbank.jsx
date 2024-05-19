import React from 'react'
import Sidebar from './sidebar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function bloodbank() {
  const location = useLocation();
  console.log(location);
  if(location.pathname === '/bloodbank' || location.pathname === '/bloodbank/')
    {
      console.log("yes");
      return <Navigate to={"/bloodbank/request"} />
    }
  return (
    

    <div className='flex' >
       
        <Sidebar name = 'Bloodbank 1' />
        
       <Outlet />

      
    </div>

        
    
  )
}

export default bloodbank