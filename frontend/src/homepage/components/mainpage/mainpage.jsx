import React from 'react';
import './mainpage.css';
import bloodbank from '../../assests/bloodbank.jpeg';
import hospital from '../../assests/hospital.jpeg';
import admin from '../../assests/admin.jpeg';
import { Link } from 'react-router-dom';

const Mainpage = () => {
  return (
    <section className='Mainpage'>
      <div className='mainpage'>
        <header className='heading'>
          <h1 className=' mt-8'>BLOOD CARE</h1>
        </header>
        <header className='heading'>
          <h1 className=' mt-40 font-serif'>LOGIN</h1>
        </header>
        <nav className='navigation'>
          <div className='mainimage1'>
         <Link to='/hlogin'>   <img src={hospital} alt='Hospital domain' /> </Link>
          </div>
          <div className='mainimage2'>
          <Link to='/blogin'> <img src={bloodbank} alt='Blood bank' /> </Link>
          </div>
          <div className='mainimage3'>
          <Link to='/alogin'> <img src={admin} alt='Admin' /> </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Mainpage;
