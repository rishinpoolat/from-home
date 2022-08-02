import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { setLogout } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import "./navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const res = useSelector((state) => state.auth);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const cart = useSelector((state) => state.cart);
  const quantity = cart?.cart?.products?.length || 0;
  const path = location.pathname.split("/")[1];

  const logout = () => {
    dispatch(setLogout()); //clear localStorage
    setUser(null);
    toast("User logged out", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      {/* navlinks */}
      <div className="nav-links ai-c df">
        <div>
          <Link className="nav-link br link mr-1" to="/recipe">
            Recipe
          </Link>
        </div>
        {user || res?.user ? (
          <>
            {path === "user" && (
              <Link className="nav-link br link mr-1" to="/" onClick={logout}>
                Logout
              </Link>
            )}

            {path !== "user" && (
              <Link
                className="link"
                to={`/user/${user?.result?._id || res?.user?._id}`}
              >
                <img
                  className="user-pic df mr-0"
                  src={
                    user?.result?.imageUrl ||
                    `https://avatars.dicebear.com/api/initials/${
                      user?.result?.name || res?.user?.name
                    })}.svg`
                  }
                  alt={user?.result?.name || res?.user?.name}
                />
              </Link>
            )}
          </>
        ) : (
          <Link className="nav-link br link mr-1" to="/auth">
            Sign In
          </Link>
        )}
        <Link className="cart-logo df" to="/cart">
          <span className="cart-qty df ai-c jcc">{quantity}</span>
          <AiOutlineShoppingCart />
        </Link>
        <button className="hamburger">
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}
