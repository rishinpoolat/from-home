import { Link } from 'react-router-dom';
import './userRegister.css';

export default function UserRegister() {

    const registerImg = 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'

    return (
        <div className='container'>
            <div className='user-register'>
                <img src={registerImg} alt="" className="register-img" />
                <h3>Have food, Have fun</h3>
                <form className='userregister-form'>
                    <input className='register-input' placeholder='Name'/>
                    <input className='register-input' placeholder='Email' type='email'/>
                    <input className='register-input' placeholder='Phone Number' type='tel'/>
                    <input className='register-input' type='password' placeholder='Password'/>
                    <input className='register-input' type='password' placeholder='Confirm Password'/>
                    <button className='submit-btn' type='submit'>Submit</button>
                </form>
            </div>
            <footer className='footer'>
                <h3>Already have an account ? </h3>
                <Link to='/userlogin' className='register-footer-link link'>Login</Link>
            </footer>
        </div>
    )
}
