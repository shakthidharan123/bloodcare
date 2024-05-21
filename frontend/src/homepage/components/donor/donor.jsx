import React from 'react';
import './donor.css';
import { FaUserCircle, FaLock } from 'react-icons/fa';

function Loginform() {
  return (
    <div className="owrapper">
      <div className="wrapper">
        <h1>HOSPITAL LOGIN</h1>
        <form action="">
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit">Submit</button>
   
        </form>
      </div>
    </div>
  );
}

export default Loginform;
