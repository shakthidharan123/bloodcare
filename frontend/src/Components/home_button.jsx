import React from 'react'
import { HiHome } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
function home_button() {
    const navigate = useNavigate();
    const home = ()=>{
        navigate('/');
    }
  return (
    <div className=' left-3 top-3 absolute cursor-pointer'>
        <HiHome className='h-5 w-5' onClick={home} />
    </div>
  )
}

export default home_button