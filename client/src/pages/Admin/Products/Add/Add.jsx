import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createCake } from "../../../../redux/features/cakeSlice";
import "./add.css";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [cakeData, setCakeData] = useState({
    // shopId: "",
    name: "",
    price: "",
    image: "",
  });

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
      cakeData.image = url;
      // TODO set shopID
      // cakeData.shopId =

      dispatch(createCake({ cakeData, navigate }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-product-add df ai-c fd-c">
      <h1>Tell us about your product</h1>
      <form className="df fd-c ai-c admin-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCakeData({ ...cakeData, name: e.target.value })}
          className="input"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setCakeData({ ...cakeData, price: e.target.value })}
          className="input"
          type="number"
          placeholder="Price"
        />
        <div className="fd-c df">
          <div className="df ai-c mb-1">
            <label>Image</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit} className="active-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
