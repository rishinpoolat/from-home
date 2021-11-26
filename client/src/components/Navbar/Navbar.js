import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

import './navbar.css'

export default function Navbar() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null)
    }

    useEffect(() => {
        // const token = user?.token;

        // jwt

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

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
                {user ? 
                <>
                <div className="nav-link-name fd-c ai-c df">
                    <span>Hi</span>
                    <span>{user.result.name}</span>
                </div>
                <Link to='/userprofile'>
                    <img className='user-pic df' src={user?.result?.imageUrl || `https://avatars.dicebear.com/api/initials/${user.result.name}")}.svg`} alt={user?.result?.name} />
                </Link>
                <Link className='nav-link link' to='/' onClick={logout}>Logout</Link>
                </> : 
                <Link className='nav-link link' to='/auth'>Sign In</Link>}
            </div>
                
        </nav>
    )
}
