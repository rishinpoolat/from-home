import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getShop } from '../../actions/shops';
import CakeCard from '../../components/CakeCard/CakeCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './singleShop.css';

const SingleShop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname.split("/")[2];

  const shop = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShop(path));
  }, [path, dispatch]);

  return (
    <div className='singleshop df fd-c'>
      <img src={shop.banner} alt="" className="singleshop-banner-img" />
      <div className="singleshop-title df ai-c">
        <img src={shop.logo} alt="" className="singleshop-logo" />
        <div className="singleshop-title-text">
          <h1>{shop.shopName}</h1>
          <h3>{shop.district}</h3>
        </div>
        </div>

        <div className="singleshop-body">
          <p className="singleshop-desc">{shop.description}</p>
          <h2>Available Cakes</h2>
          <div className="singleshop-menu df">
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
          </div>
          <h3 className='singleshop-rating'>Ratings</h3>
          <div className="singleshop-review df">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </div>
        </div>
    </div>
  );
}

export default SingleShop;
