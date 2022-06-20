import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

import { createNewShop } from "../../actions/shops";

import "./shopRegister.css";

const ShopRegister = () => {
  const [shopData, setShopData] = useState({
    shopName: "",
    district: "",
    ownerName: "",
    email: "",
    shopPhone: "",
    address: "",
    logo: "",
    banner: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createNewShop(shopData));
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
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setShopData({ ...shopData, banner: base64 })
              }
            />
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
