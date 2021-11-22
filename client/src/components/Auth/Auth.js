import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './auth.css';

export default function Auth() {

  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);

  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error);  
    }
  }

  const googleFailure = (err) => {
    console.log(err);
    console.log('google sign in was unsuccessful, try again later')
  }

  return (
    <div className='loginpage fd-c ai-c df'>
      <div>
          <h2>Have food, Have fun</h2>
          <h4>{isSignup ? 'Sign Up' : 'Sign In'}</h4>
          <form className='login-form ai-c fd-c df' onSubmit={handleSubmit}>
            { isSignup && (
              <>
                <input value="firstName" className='input' placeholder='First Name' type='text' onChange={handleChange} autoFocus/>
                <input value="lastName" className='input' placeholder='Last Name' type='text' onChange={handleChange}/>
              </>
            )}
              <input className='input' placeholder='Email' type='email'/>
              <input className='input' type='password' placeholder='Password'/>
              { isSignup &&  <input className='input' type='password' placeholder='Confirm Password'></input>}
              <button className='active-button' type='submit'>Sign { isSignup ? 'Up' : 'In'}</button>
              <GoogleLogin 
                clientId="928467156334-3b821q3npa4ga19akreh1miudpcm32v8.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button className='active-button' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In with Google</button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin'
              />
          </form>
      </div>
      <footer className='footer'>
            <h3>Don't have an account ?</h3>
            <button className='active-button' onClick={switchMode}>{ isSignup ? 'Already have an account? Sign In' : "Dont't have an account? Sign Up"}</button>
        </footer>
    </div>
  )
}
