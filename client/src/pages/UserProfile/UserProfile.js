import { Link } from 'react-router-dom'
import './userProfile.css'

export default function UserProfile() {
  return (
    <div className='userprofile'>
      <div className="userprofile-main">
        <div className="userprofile-left">
          <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="" className="userprofile-pic" /> 
          <button className="userprofile-edit-button">Edit Profile</button>
        </div>
        <div className="userprofile-right">
          <h3>Name</h3>
          <span>email</span>
          <span>phone</span>
          <span>location</span>
        </div>
      </div>
      <footer className="userprofile-footer">
        <h3>Want to start a Shop ?</h3>
        <Link className='link' to='/shops/shopregister'>Start a shop</Link>
      </footer>
    </div>
  )
}
