import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {

    const { user, Logout } = useContext(AuthContext);

    const handleLogout = () => {
        Logout()
            .then(res => {
                <Navigate to='/login'></Navigate>
            })
            .catch(error => console.error('error: ', error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.accessToken ?
                        <div>
                            <ul className="menu menu-horizontal p-0">
                                <li><Link to='/addServices'>Add Service</Link></li>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                            </ul>
                            <button className="btn" onClick={handleLogout}>LogOut</button>
                        </div>
                        :
                        <Link to='/login' className="btn">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Header;