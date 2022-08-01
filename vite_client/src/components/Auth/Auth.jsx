import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../redux/features/authSlice";
import { toast } from 'react-toastify';
import "./auth.css";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    hasShop: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const { firstName, lastName, email, password, confirmPassword, hasShop } =
    formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        hasShop,
      };
      console.log(userData);
      dispatch(register({ userData, navigate,toast }));
    } else {
      const userData = { email, password };
      dispatch(login({ userData, navigate, toast }));
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
        </form>
          <button className="active-button" onClick={switchMode}>
            {isSignup
              ? "Already have an account? Sign In"
              : "Dont't have an account? Sign Up"}
          </button>
      </div>
    </div>
  );
}
