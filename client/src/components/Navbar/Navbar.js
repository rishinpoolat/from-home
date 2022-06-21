import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    // const token = user?.token;

    // jwt

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav className="navbar ai-c df">
      <div className="logo">
        <Link className="nav-link-logo link" to="/">
          <span className="from">From</span>
          <span className="home">Home</span>
        </Link>
      </div>
      <div className="nav-links ai-c df">
        <div>
          <Link className="nav-link link recipielink" to="/recipie">
            Recipie
          </Link>
        </div>
        {user ? (
          <>
            <Link to="/userprofile">
              <img
                className="user-pic df"
                src={
                  user?.result?.imageUrl ||
                  `https://avatars.dicebear.com/api/initials/${user.result.name}")}.svg`
                }
                alt={user?.result?.name}
              />
            </Link>
            <Link className="nav-link link" to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <Link className="nav-link link" to="/auth">
            Sign In
          </Link>
        )}
        <Link className="cart-logo df" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
}
