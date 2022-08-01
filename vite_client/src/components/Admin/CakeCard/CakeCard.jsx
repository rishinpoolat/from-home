import {RiDeleteBin6Fill} from "react-icons/ri";
import {MdEdit} from "react-icons/md";
import { removeCake, renewCake } from "../../../redux/features/cakeSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import "./cakeCard.css";


const CakeCard = ({cake}) => {
  const dispatch = useDispatch();
  const id = cake._id;
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState(null);
  const [cakeData, setCakeData] = useState({
    name: cake.name,
    price: cake.price,
    image: cake.image
  })
  const handleUpdate = async(e) => {
    e.preventDefault();
    if(file) {
      const data = new FormData();
      data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/ziifoo/image/upload", data);
            const {url} = uploadRes.data;
            cakeData.image = url;
            dispatch(renewCake(id, {cakeData}));
            setEdit((edit) => !edit);
        } catch (error) {
            console.log(error);
        }
    } else {
      dispatch(renewCake(id, {cakeData}))
    }

  }
  const handleEdit = () => {
    setEdit((edit) => !edit)
  };
  
  const handleDelete = () => {
    dispatch(removeCake(cake._id))
  };
  return (

    <div className="admin-cakecard df fd-c br bd-0 mb-1">
      <div className="df ai-c jc-sb">
        <img src={cake?.image} alt="" className="admin-cakecard-img"/>
        <span className="admin-cakecard-span ai-c">{cake?.name}</span>
        <div className="df">
          <button onClick={handleEdit} className="admin-cakecard-button"><MdEdit/></button>
          <button onClick={handleDelete} className="admin-cakecard-button">
          <RiDeleteBin6Fill/>
          </button>
      </div>
      </div>
      <div className="df fd-c">

        {edit && 
          <form onSubmit={handleUpdate} className="df fd-c">
            <input onChange={(e) => setCakeData({...cakeData, name: e.target.value})} className="input" placeholder={cake?.name}/>
            <input onChange={(e) => setCakeData({...cakeData, price: e.target.value})} className="input" placeholder={cake?.price}/>
            <input onChange={(e) => setFile(e.target.files[0])} className="input" type='file'/>
            <button onClick={handleUpdate} className="active-button">Update</button>
          </form>
        }
      </div>
    </div>
  );
}

export default CakeCard;