import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { fetchCart } from "../../redux/features/cartSlice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id;

  useEffect(() => {
    dispatch(fetchCart(id));
  }, []);
  console.log(cart);

  return (
    <div className="cart df jc-sb">
      <div className="cart-left df fd-c">
        <h1 className="cart-heading">MY CART</h1>
        <div>
          {cart?.cart?.products?.map((item) => (
            <CartItem key={item._id} product={item} />
          ))}
        </div>
      </div>

      <div className="cart-right-container bd-0 br">
        <h3>Sub Total = {cart?.cart?.bill} </h3>
        <p>Offer : 0</p>
        <p>Coupon : 0</p>
        <p>Tax : 0</p>
        <h4>Amount to be paid = Rs. {cart?.cart?.bill} </h4>
        <Link className="link" to="/checkout">
          <button className="active-button cart-button">Proceed to Pay</button>
        </Link>
        {/* <StripeCheckout
          name="FromHome"
          billingAddress
          shippingAddress
          description={`Your total is ${cart[0].bill}`}
          amount={cart[0].bill * 100}
          token={onToken}
          stripeKey={KEY}
        /> */}
      </div>
    </div>
  );
};

export default Cart;
