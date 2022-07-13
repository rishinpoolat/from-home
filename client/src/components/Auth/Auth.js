import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, register } from "../../redux/features/authSlice";
import "./auth.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  hasShop: false,
};

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // custome userpic
  // https://avatars.dicebear.com/api/initials/happy.svg

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(register(formData, navigate));
    } else {
      dispatch(login(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (err) => {
    console.log(err);
    console.log("google sign in was unsuccessful, try again later");
  };

  return (
    <div className="loginpage fd-c ai-c df">
      <div className="df ai-c jcc fd-c loginpage-container br bs-1">
        <h2>Have food, Have fun</h2>
        <h4>{isSignup ? "Sign Up" : "Sign In"}</h4>
        <form className="login-form ai-c fd-c df" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                name="firstName"
                className="input"
                placeholder="First Name"
                type="text"
                onChange={handleChange}
                autoFocus
              />
              <input
                name="lastName"
                className="input"
                placeholder="Last Name"
                type="text"
                onChange={handleChange}
              />
            </>
          )}
          <input
            name="email"
            className="input"
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {isSignup && (
            <input
              name="confirmPassword"
              className="input"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            ></input>
          )}
          <button className="active-button" type="submit">
            Sign {isSignup ? "Up" : "In"}
          </button>
          <GoogleLogin
            clientId="928467156334-3b821q3npa4ga19akreh1miudpcm32v8.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="active-button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign In with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </form>
        <footer className="footer">
          <button className="active-button" onClick={switchMode}>
            {isSignup
              ? "Already have an account? Sign In"
              : "Dont't have an account? Sign Up"}
          </button>
        </footer>
      </div>
    </div>
  );
}
