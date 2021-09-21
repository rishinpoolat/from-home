import { Link } from 'react-router-dom';
import './userLogin.css';

export default function UserLogin() {
  return (
    <div className='loginpage'>
      <div className='loginpage-container'>
          {/* <img src={registerImg} alt="" className="register-img" /> */}
          <h3>Have food, Have fun</h3>
          <form className='login-form'>
              <input className='register-input' placeholder='Email' type='email'/>
              <input className='register-input' placeholder='Phone Number' type='tel'/>
              <input className='register-input' type='password' placeholder='Password'/>
              <button className='submit-btn' type='submit'>Submit</button>
          </form>
      </div>
      <footer className='footer'>
            <h3>Don't have an account ?</h3>
            <Link to='/userregister' className='loginpage-footer-link link'>Create an account</Link>
        </footer>
    </div>
  )
}
