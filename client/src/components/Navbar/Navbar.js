import { Link } from "react-router-dom";

import './navbar.css'

export default function Navbar() {

    const isLoggedIn = true;

    return (
        <nav className='navbar'>
            <div className="logo">
                <Link className='nav-link-logo link' to="/">
                    BiteMeUp
                </Link>
            </div>
            <div className="nav-links">
                {isLoggedIn ? 
                <>
                <div className="nav-link-name">
                    <span>Hi</span>
                    <span>Marvin</span>
                </div>
                <Link to='/userprofile'>
                    <img className='user-pic' src="https://randomuser.me/api/portraits/men/42.jpg" alt="" />
                </Link>
                </> : 
                <Link className='nav-link link' to='/userlogin'>Register/Login</Link>}
            </div>
                
        </nav>
    )
}
