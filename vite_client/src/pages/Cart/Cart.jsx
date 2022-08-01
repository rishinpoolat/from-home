import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import CartItem from "../../components/CartItem/CartItem";
import CheckOut from "../../components/CheckOut/CheckOut";
import { fetchCart } from "../../redux/features/cartSlice";
import { cartCheckout } from "../../redux/features/orderSlice";
import "./cart.css";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token)
  }

  console.log(stripeToken);

  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem('profile'))
  const id = cart[0]?.userId;
  console.log(cart);
  useEffect(() => {
    dispatch(fetchCart(id))
  },[])


  return (
    <div className="cart df jc-sb">
      <div className="cart-left df fd-c">
        <h1 className="cart-heading">MY CART</h1>
          <div>
        {
            cart[0]?.products.map((item) => (
              <CartItem key={item._id} product={item}/>
            ))
        }
          </div>
      </div>

      <div className="cart-right-container bd-0 br">
        <h3>Sub Total = {cart[0]?.bill} </h3>
        <p>Offer : 0</p>
        <p>Coupon : 0</p>
        <p>Tax : 0</p>
        <h4>Amount to be paid = Rs. {cart[0]?.bill} </h4>
        <button className="active-button cart-button">Proceed to Pay</button>
        <StripeCheckout
          name="FromHome"
          billingAddress
          shippingAddress
          description={`Your total is ${cart[0].bill}`}
          amount={cart[0].bill*100}
          token={onToken}
          stripeKey={KEY}
        />
      </div>
    </div>
  );
};

export default Cart;
