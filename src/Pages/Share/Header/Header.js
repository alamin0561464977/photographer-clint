import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContextAPI/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const NavItem = <>
        <li><Link className='mx-2 font-bold' to='/'>Home</Link></li>
        <li><Link className='mx-2 font-bold' to='/services'>Services</Link></li>
        <li><Link className='mx-2 font-bold' to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">The Magic Hour Photographer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {NavItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <Link to='/login' className="btn btn-outline btn-secondary">Login</Link>
                        :
                        <>
                            <button onClick={logOut} className="btn btn-outline btn-secondary">Log Out</button>
                            <div className="avatar">
                                <div className="w-16 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;