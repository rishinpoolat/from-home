import { Link } from 'react-router-dom';
import './userRegister.css';
import FileBase from 'react-file-base64';

export default function UserRegister() {
    return (
        <div className='container df fd-c '>
            <div className='df fd-c ai-c'>
                <h2>Have food, Have fun</h2>
                <form className='userregister-form ai-c fd-c df'>
                    <input className='input' placeholder='Name'/>
                    <input className='input' placeholder='Email' type='email'/>
                    <input className='input' placeholder='Phone Number' type='tel'/>
                    <div className='df ai-c propic'>
                    <label>Photo </label>
                            <FileBase
                                type='file'
                                multiple={false}
                                onDone={({ base64 }) => {}}
                            />
                    </div>        
                    <input className='input' type='password' placeholder='Password'/>
                    <input className='input' type='password' placeholder='Confirm Password'/>
                    <button className='active-button' type='submit'>Submit</button>
                </form>
            </div>
            <footer className='footer'>
                <h3>Already have an account ? </h3>
                <Link to='/userlogin' className='register-footer-link link'>Login</Link>
            </footer>
        </div>
    )
}
