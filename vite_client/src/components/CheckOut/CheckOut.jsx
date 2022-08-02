import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchCart } from "../../redux/features/cartSlice";
import { cartCheckout } from "../../redux/features/orderSlice";
import "./checkout.css";

const CheckOut = ({ user }) => {
  const [address, setAddress] = useState({
    fullName: user?.result?.name,
    flatNo: "",
    area: "",
    city: "",
    state: "Kerala",
    phone: "",
  });

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const id = user?.result?._id;

  useEffect(() => {
    dispatch(fetchCart(id));
  }, []);

  const handleSubmit = async () => {
    if (!address.area || !address.flatNo || !address.city || !address.phone) {
      toast.warn("All Fields are mandatory", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const id = user?.result?._id;
      dispatch(cartCheckout(id, address));
    }
  };

  return (
    <div className="df ai-c jcc">
      <div className="checkout br bd-0 bs-0">
        <h1 className="mb-1">Order Checkout</h1>
        <p className="mb-1">Sub Total : Rs.{cart?.bill}</p>
        <input
          className="input"
          type="text"
          value={address.fullName}
          placeholder={`Full Name : ${address.fullName}`}
        />
        <input
          onChange={(e) => setAddress({ ...address, flatNo: e.target.value })}
          type="text"
          className="input"
          placeholder="flatNo/HouseNo"
        />
        <input
          onChange={(e) => setAddress({ ...address, area: e.target.value })}
          type="text"
          className="input"
          placeholder="Area"
        />
        <input
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          type="text"
          className="input"
          placeholder="City"
        />
        <input
          onChange={(e) => setAddress({ ...address, phone: e.target.value })}
          type="text"
          className="input"
          placeholder="Phone"
        />
        <input
          type="text"
          className="input"
          placeholder="State"
          value={address.state}
        />
        <button onClick={handleSubmit} className="active-button">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
