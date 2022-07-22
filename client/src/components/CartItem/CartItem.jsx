import { useState } from "react";
import "./cartItem.css";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {};

  return (
    <div className="cart-items bs-0 bd-0">
      <div className="df">
        <img className="cart-img " src={product.image} alt="cart-img" />

        <div className="cart-right df jc-sb">
          <div className="df fd-c">
            <span className="cart-item-name">
              Name : <span>{product.name}</span>
            </span>
            <span className="cart-item-name">
              Price : <span>Rs. {product.price}</span>
            </span>
            <span>Quantity</span>
            <div className="df ai-c">
              <button
                className="bn qty-btn"
                onClick={() => setQuantity(quantity && quantity - 1)}
              >
                -
              </button>
              <span className="cart-item-qty">{quantity}</span>
              <button
                className="bn qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <button onClick={handleClick} className="cart-btn br">
              remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
