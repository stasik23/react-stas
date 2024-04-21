import React from 'react'
import './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navStyles'>
            {/* <NavLink to="/" onClick={()=>console.log('You entered to Main')} />Main Page<NavLink />
            <NavLink to="/aboutus" onClick={()=>console.log('You entered to AboutUs')} />AboutUs Page<NavLink /> */}
            <a href='/'>Main Page</a>
            <a href='/aboutus'>AboutUs Page</a>
        </div>
    )
}

export default NavBar