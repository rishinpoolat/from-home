import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './userProfile.css'

export default function UserProfile() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    useEffect(() => {
        // const token = user?.token;

        // jwt

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

  const hasShop = false;

  return (
    <div className='userprofile df fd-c ai-c'>
      <div className="userprofile-main df">
        <div className="userprofile-left df fd-c">
          <img src={user?.result?.imageUrl || `https://avatars.dicebear.com/api/initials/${user.result.name}")}.svg`} alt="" className="userprofile-pic" /> 
          <button className="active-button">Edit Profile</button>
        </div>
        <div className="userprofile-right fd-c">
          <h3>Name : { user.result.name}</h3>
          <span>email: {user.result.email}</span>
          <span>location:7787789787987w87q6gdsj</span>
        </div>
      </div>
      <footer className="footer">
      {hasShop? <>
        <h3>Customize shop</h3>
        <Link className='shop-btn link' to='/shopedit'>Edit my shop</Link>
      </> : 
      <>
      <h3>Want to start a Shop ?</h3>
        <Link className='shop-btn link' to='/shops/shopregister'>Start a shop</Link>
      </>
      }
        
      </footer>
    </div>
  )
}