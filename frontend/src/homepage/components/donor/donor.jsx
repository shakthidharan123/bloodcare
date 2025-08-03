import React,{useState} from 'react';
import './donor.css';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Home_button from '@/Components/home_button';

function Loginform() {
  const navigate = useNavigate();
  const [Data,setData] = useState({
    name:'',
    password:''
  });

  const handleInput = (event)=>{
   // console.log(event.target)
    const{name,value} = event.target;
    setData({...Data,[name]:value})
    console.log(Data);

  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/hospital/login',Data,{withCredentials:true}).then((res)=>{
      if(res.data === "success"){
         // alert("success");
         toast.success("Login Success");
          navigate('/hospitalrequest')
      }
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  const handleSignup = ()=>{
    navigate('/hospital/signup')
  }

  return (
    <div className="owrapper">
      
      <div className="wrapper">
        <Home_button />
        <h1>HOSPITAL LOGIN</h1>
        <form action="">
          <div className="input-box">
            <input name="name" type="text" onChange={handleInput} placeholder="Username" required />
            <FaUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input type="password" onChange={handleInput} name='password' placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a className='hover:cursor-pointer' onClick={handleSignup}>Sign up</a>
          </div>
          <button type="submit" onClick={handleSubmit} >Submit</button>
   
        </form>
      </div>
    </div>
  );
}

export default Loginform;
