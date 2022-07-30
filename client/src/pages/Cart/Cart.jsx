import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import "./cart.css";

const Cart = () => {
  // get all cart items
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  // const cakes = useSelector((state) => state.cakes);

  // TODO
  // get cakes from cart

  return (
    <div className="cart df fd-c ai-c">
      <h1 className="cart-heading">MY CART</h1>
      {cart.products.map((item) => (
        <CartItem key={item._id} product={item} />
      ))}

      <div className="cart-bottom">
        <h2>Sub Total = Rs. {cart.total} </h2>
        <button className="active-button cart-button">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Cart;
