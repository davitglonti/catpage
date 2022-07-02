
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../component/navbar.css'
import { FiChevronRight } from 'react-icons/fi';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftbar'>
        <NavLink to="/" className='link'>Home</NavLink> 
                <Link to="/about" className='link'>about</Link> 
                <Link to="/galery" className='link'>gallery</Link> 
              
        </div>
        <div className='rightbar'>
          <nav className='nav'>
          <Link to="/sign in" className='link'><FiChevronRight/>sign in</Link>
              
           </nav> 
        </div>
    </div>
  )
}

export default Navbar
