import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { BsStarHalf } from "react-icons/bs";
import { addItemToCart } from "../../redux/features/cartSlice";
import { toast } from "react-toastify";
import "./cakeCard.css";

export default function CakeCard({ cake }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  
  const handleClick = () => {
    if(user) {
    const userId = user?.result?._id;
    const productId = cake?._id;
    const quantity = 1;
    dispatch(addItemToCart({userId, productId, quantity}));
    toast('Successfully added to cart', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
    } else {
      navigate('/auth');
    }
  };

  const rating = (3.0 + Math.random() * 2.0).toFixed(1);

  return (
    <div className="cakecard br df fd-c">
      <div className="cakecard-hero">
        <img src={cake.image} alt={cake.name} className="cakecard-img" />
      </div>
      {/* name, price, rating */}
      <div className="cakecard-info df jc-sb">
        {/* name, price */}
        <div>
          <p className="cake-name">{cake.name}</p>
          <p className="df ai-c">
            <b>Rs.</b>
            <span>{cake.price}</span>
          </p>
        </div>
        {/* rating */}
        <div className="df cakecard-rating">
          <span>{rating}</span>
          <BsStarHalf className="star-icon" />
        </div>
      </div>
      <div className="cakecard-action">
        <button onClick={handleClick} className="active-button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

// TODO
// add to cart function
// like option
