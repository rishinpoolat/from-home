import { useDispatch } from "react-redux";
import { BsStarHalf } from "react-icons/bs";
import "./cakeCard.css";
import { addProduct } from "../../redux/features/cartSlice";
import { useState } from "react";

export default function CakeCard({ cake }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    dispatch(addProduct({ ...cake, quantity }));
  };

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
        <div>
          <span>
            4.5
            <BsStarHalf />
          </span>
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
