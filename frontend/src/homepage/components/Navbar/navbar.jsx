import React from 'react'
import './navbar.css'
import logo from '../../assests/logo2.jpg';
import {Link} from 'react-scroll';
import contactImg from '../../assests/contact.png'

const Navbar = () => {
  return (
  <nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='desktopMenu'>

    <Link  activeClass='active' to='Mainpage' spy ={true} smooth={true} offset={-100} duration ={500} className="desktopMenuListItem">Home</Link>
    <Link  activeClass='active' to='ImageSlider' spy ={true} smooth={true} offset={-100} duration ={500} className="desktopMenuListItem">About</Link>
    <Link  activeClass='active' to='Services' spy ={true} smooth={true} offset={-100} duration ={500} className="desktopMenuListItem">Services</Link>
    <Link  activeClass='active' to='Clients' spy ={true} smooth={true} offset={-100} duration ={500} className="desktopMenuListItem">Clients</Link>
    
   
    </div>
    
    <img src={logo} alt='logo' className='logo'/>
    </nav>
  )
}
export default Navbar;