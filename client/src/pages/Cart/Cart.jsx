import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { getCartItems } from "../../actions/cart";
import "./cart.css";
import { getCake } from "../../actions/cake";

const Cart = () => {
  const dispatch = useDispatch();
  // get all cart items
  const cart = useSelector((state) => state.cart);
  // const cakes = useSelector((state) => state.cakes);
  console.log(cart);

  // TODO
  // get cakes from cart

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className="cart df fd-c ai-c">
      <h1 className="cart-heading">my cart</h1>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />

      <div className="cart-bottom">
        <h2>sub total =${3 + 5} </h2>
        <button className="active-button">proceed to pay</button>
      </div>
    </div>
  );
};

export default Cart;
