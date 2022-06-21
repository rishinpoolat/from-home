import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createNewShop } from "../../actions/shops";

import "./shopRegister.css";
import axios from "axios";

const ShopRegister = ({ user }) => {
  const [file, setFile] = useState(null);
  const [shopData, setShopData] = useState({
    userId: "",
    shopName: "",
    district: "",
    ownerName: "",
    email: "",
    shopPhone: "",
    address: "",
    banner: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ziifoo/image/upload",
        data
      );

      const { url } = uploadRes.data;
      shopData.banner = url;
      shopData.userId = user.result._id;

      dispatch(createNewShop(shopData));
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {};

  return (
    <div className="shopregister df ai-c fd-c">
      <h3>Tell Us about your shop</h3>
      <form className="shopregister-form df fd-c ai-c" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Name of Shop"
          type="text"
          value={shopData.shopName}
          onChange={(e) =>
            setShopData({ ...shopData, shopName: e.target.value })
          }
          name="shopName"
        />
        <input
          className="input"
          placeholder="District"
          value={shopData.district}
          onChange={(e) =>
            setShopData({ ...shopData, district: e.target.value })
          }
          name="district"
        />
        <input
          className="input"
          placeholder="Owner Name"
          type="text"
          value={shopData.ownerName}
          onChange={(e) =>
            setShopData({ ...shopData, ownerName: e.target.value })
          }
          name="ownerName"
        />
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={shopData.email}
          onChange={(e) => setShopData({ ...shopData, email: e.target.value })}
          name="email"
        />
        <input
          className="input"
          placeholder="Phone"
          type="tel"
          value={shopData.shopPhone}
          onChange={(e) =>
            setShopData({ ...shopData, shopPhone: e.target.value })
          }
          name="phone"
        />
        <input
          className="input"
          placeholder="Address"
          value={shopData.address}
          onChange={(e) =>
            setShopData({ ...shopData, address: e.target.value })
          }
          name="address"
        />
        <div className="shopregister-img-icons fd-c df">
          <div className="shopregister-icon">
            <label>banner</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
        <textarea
          className="input shopregister-textarea"
          name="description"
          rows="2"
          cols="35"
          placeholder="Description"
          value={shopData.description}
          onChange={(e) =>
            setShopData({ ...shopData, description: e.target.value })
          }
        ></textarea>
        <button className="active-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button
          className="shopregister-clear-btn active-button "
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default ShopRegister;
