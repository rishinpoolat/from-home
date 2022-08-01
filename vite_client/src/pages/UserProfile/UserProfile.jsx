import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'
import { fetchUserShops } from "../../redux/features/shopSlice";
import "./userProfile.css";
import Loading from "../../components/Loading/Loading";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [user, setUser] = useState();
  const {userShops, loading} = useSelector((state) => state.shops);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    dispatch(fetchUserShops(id));
  }, [dispatch, id]);
  
  loading && <Loading/>

  return (
    <div className="userprofile df fd-c ai-c">
      <div className="userprofile-main df bs-0 bd-0 br">
        <div className="userprofile-left df fd-c">
          <img
            src={
              user?.result?.imageUrl ||
              `https://avatars.dicebear.com/api/initials/${user?.result?.name}")}.svg`
            }
            alt=""
            className="userprofile-pic"
          />
          <button className="active-button">Edit Profile</button>
        </div>
        <div className="userprofile-right fd-c">
          <h3 className="mb-1">Name : {user?.result?.name}</h3>
          <span>email: {user?.result?.email}</span>
        </div>
      </div>
      <footer className="footer">
        <h3>{userShops.length ? `Already have Shops` : `Want to Start a Shop` }</h3>
        <Link
          className="shop-btn link df ai-c jcc"
          to={userShops.length ? `/admin/user/${id}` : `/shopregister`}
        >
          {userShops.length ? `Go to my admin DashBoard` : `Start a New Shop` }
          <span className="ml-1 df"><AiOutlineArrowRight/></span>
        </Link>
      </footer>
    </div>
  );
}
