import React, { useState } from 'react';
import './bloodbank.css';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Home_button from '@/Components/home_button';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css';

function Loginform() {
  const[value,setvalue] = useState({
    name:'',
    password:''
  });
  const navigate=useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
    Axios.post('http://localhost:8081/bloodbank/login',value,{withCredentials:true}).then((res)=>{
      console.log(res);
      if(res.data === 'error')
        alert('Login error');
      else{
       // alert('Login success');
       toast.success("Login Successfull");
        navigate('/bloodbank/request');
      }
        

    }).catch(()=>{
      console.error("Error");
    })
    
  }
  const handleSignup =()=>{
    
    navigate('/bloodbank/signup')
  }

  const handleInput = (event)=>{
        setvalue(prev =>({...prev,[event.target.name]:[event.target.value]}))
        console.log(value);
  }
  return (
    <div className="owrapper">
      <div className="wrapper">
        <Home_button />
        <h1>BLOOD BANK LOGIN</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name = 'name' placeholder="Username" required onChange={handleInput} />
            <FaUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input type="password" name = "password" placeholder="Password" onChange={handleInput} required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" onClick={()=>{console.log(value)}}/>
              Remember me
            </label>
            <a onClick={handleSignup} className='hover:cursor-pointer'>Sign up</a>
          </div>
          <button type="submit">Login</button>
          
        </form>
      </div>
      
    </div>
  );
}

export default Loginform;
