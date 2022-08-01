import { useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CakeCard from "../../components/CakeCard/CakeCard";
import { fetchCakesOfShop } from "../../redux/features/cakeSlice";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { getShop } from "../../redux/features/shopSlice";
import "./singleShop.css";

const SingleShop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname.split("/")[2];

  const {shop} = useSelector((state) => state.shops);
  const {shopCakes, loading} = useSelector((state) => state.cakes);
  
  useEffect(() => {
    dispatch(getShop(path));
    dispatch(fetchCakesOfShop(path));
  }, [path, dispatch]);
  console.log(shopCakes);

  return (
    <div className="singleshop df fd-c">
      <img src={shop.banner} alt="" className="singleshop-banner-img br" />
      <div className="singleshop-title df ai-c">
        <div className="singleshop-title-text">
          <h1>{shop.shopName}</h1>
          <h3>
            <GrLocation className="location-icon" />
            {shop.district}
          </h3>
        </div>
      </div>

      <div className="singleshop-body">
        <p className="singleshop-desc">{shop.description}</p>
        <h2>Available Cakes</h2>
        <div className="singleshop-menu df">
        {shopCakes[0]?.map((cake) => (
          <div key={cake?._id}>
            <CakeCard cake={cake}/>

          </div>
        ))}
          {/* <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/> */}
        </div>
        <h3 className="singleshop-rating">Ratings</h3>
        <div className="singleshop-review df">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
