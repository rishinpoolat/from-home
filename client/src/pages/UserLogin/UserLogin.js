import { Link } from 'react-router-dom';
import './userLogin.css';

export default function UserLogin() {
  return (
    <div className='loginpage fd-c ai-c df'>
      <div>
          <h2>Have food, Have fun</h2>
          <form className='login-form ai-c fd-c df'>
              <input className='input' placeholder='Email' type='email'/>
              <input className='input' placeholder='Phone Number' type='tel'/>
              <input className='input' type='password' placeholder='Password'/>
              <button className='active-button' type='submit'>Submit</button>
          </form>
      </div>
      <footer className='footer'>
            <h3>Don't have an account ?</h3>
            <Link to='/userregister' className='register-footer-link link'>Create an account</Link>
        </footer>
    </div>
  )
}
