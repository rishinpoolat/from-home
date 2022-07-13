import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const quantity = useSelector((state) => state.cart.quantity);

  const path = location.pathname.split("/")[1];

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

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
          <Link className="nav-link br link recipielink" to="/recipie">
            Recipie
          </Link>
        </div>

        {user ? (
          <>
            {path === "user" ? (
              <>
                <Link className="nav-link br link" to="/" onClick={logout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to={`/user/${user.result?._id}`}>
                  <img
                    className="user-pic df mr-0"
                    src={
                      user?.result?.imageUrl ||
                      `https://avatars.dicebear.com/api/initials/${user.result?.name}")}.svg`
                    }
                    alt={user?.result?.name}
                  />
                </Link>
              </>
            )}
          </>
        ) : (
          <Link className="nav-link br link" to="/auth">
            Sign In
          </Link>
        )}
        <Link className="cart-logo df" to="/cart">
          <span className="cart-qty df ai-c jcc">{quantity}</span>
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
}
