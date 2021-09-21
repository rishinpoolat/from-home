import './sidebar.css'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar'>
      <h3>Have a Recipie ? </h3>
      <h5>Share with us</h5>
      <form className="sidebar-form" onSubmit={() => {}}>
        <input type="text" className="sidebar-input" placeholder='Name of Item'/>
        <input type="text" className="sidebar-input" placeholder='Ingridients'/>
        <textarea className='sidebar-textarea' name="recipie" rows="10" cols="35" placeholder='Enter your recipie' onChange={(e) => {}}></textarea>  
        <button className="sidebar-button">Share</button>
        <button className="sidebar-button-clear link">Clear</button>
      </form>
      <div className="touch-with-us">
        <h3>Touch With Us</h3>
        <ul className='social-icons-list'>
          <Link className='social-icon' to='www.instagram.com'><i className="fab fa-instagram"></i></Link>
          <Link className='social-icon' to='www.facebook.com'><i className="fab fa-facebook"></i></Link>
          <Link className='social-icon' to='www.twitter.com'><i className="fab fa-twitter"></i></Link>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
