import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../../../assets/boy.png';
import navLogo from '../../../assets/nav-logo.jpg';

const Navbar = () => {
    const navItems = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/allToy'>All Toys</Link> </li>
        <li> <Link to='/myToy'>My Toys</Link> </li>
        <li> <Link to='addToy'>Add a Toy</Link> </li>
        <li> <Link to='/blog'>Blogs</Link> </li>
        <li> <Link to='/register' className='text-green-400'>Register</Link> </li>
        <li> <Link to='/logIn' className='text-green-400'>Log In</Link> </li>
        <li> <button className='text-red-400'>Log Out</button> </li>
    </>
    return (
        <div className="border-b navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 text-black bg-gray-200 shadow menu menu-compact dropdown-content rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link> <img className='w-[80px] rounded-full' src={navLogo} alt="" /></Link>
                <a className="text-xl normal-case btn btn-ghost">TOY WORLD</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-[60px]' src={userLogo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;