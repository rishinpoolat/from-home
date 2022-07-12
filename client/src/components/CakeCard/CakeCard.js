import { useDispatch } from "react-redux";
import { BsStarHalf } from "react-icons/bs";
import "./cakeCard.css";
import { createCart } from "../../actions/cart";
import { useState } from "react";

export default function CakeCard({ cake }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    dispatch(createCart(cake, quantity, user.result?._id));
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
        <button onClick={addToCart} className="active-button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

// TODO
// add to cart function
// like option
