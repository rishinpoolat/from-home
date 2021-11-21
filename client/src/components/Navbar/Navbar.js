import { Link } from "react-router-dom";

import './navbar.css'

export default function Navbar() {

    const isLoggedIn = false;

    return (
        <nav className='navbar ai-c df'>
            <div className="logo">
                <Link className='nav-link-logo link' to="/">
                    <span className="from">From</span><span className="home">Home</span>
                </Link>
            </div>
            {/* <div>
                <Link className='link recipielink' to='/recipie'>recipie</Link>
            </div> */}
            <div className="nav-links ai-c df">
                {isLoggedIn ? 
                <>
                <div className="nav-link-name fd-c ai-c df">
                    <span>Hi</span>
                    <span>Marvin</span>
                </div>
                <Link to='/userprofile'>
                    <img className='user-pic df' src="https://thispersondoesnotexist.com/image" alt="" />
                </Link>
                </> : 
                <Link className='nav-link link' to='/userlogin'>Register/Login</Link>}
            </div>
                
        </nav>
    )
}
