import React from 'react'
import Admin_Sidebar from './admin_Sidebar'
import Admin_dashboard from './admin_dashboard'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
function admin() {
  return (
    <div className='flex flex-row h-[100vh] w-[100vw]'>
     
        <Admin_Sidebar />
      
      <div className='flex flex-col flex-grow '>
        <div className='h-[8%] border w-[100%] flex justify-between  items-center font-bold text-xl'>
          <div>Dashboard</div>
          <div className='flex'>
            <div className='mr-2'><FaRegUserCircle className='h-8 w-8' /></div>
            <div className='text-xl'>superadmin</div>
          </div>
        </div>
        <div className='flex-grow'>
            <div className='h-[50%] border'>
                Card
            </div>
            <div className='flex h-[50%]'>
              <div className='flex-1 border border-r'>Hospital</div>
              <div className='flex-1 border-r'>BBank</div>
              <div className='flex-1'>Stock</div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default admin