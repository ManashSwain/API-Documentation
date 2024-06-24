import React from 'react';
import './Navbar.scss';
import git_hub from '../../assets/code.png'
import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navlogo">
        <NavLink to={'/'}>My API</NavLink>
        </div>
        <div className="navItems">
        <Link to='https://github.com/ManashSwain/restAPI' target='_blank'><img src={git_hub} alt="git-hub" /></Link>
        <NavLink to='/blog'>Blog</NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar
