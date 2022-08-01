import {MdClose} from 'react-icons/md';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import {addNewCake} from '../../../redux/features/cakeSlice';
import { useNavigate } from 'react-router-dom';

const AddCake = ({ setIsOpen, id, isAdd, path}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [file, setFile] = useState(null)
    const [cakeData, setCakeData] = useState({
        shopId: "",
        name: "",
        price: 0,
        image: "",
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/ziifoo/image/upload", data);
            const {url} = uploadRes.data;
            cakeData.image = url;
            cakeData.shopId = id;
            dispatch(addNewCake({cakeData,toast, path, navigate}));
            setIsOpen((isOpen) => !isOpen)
        } catch (error) {
            console.log(error);
        }
      }
    return (
        <div className='addcake df ai-c jcc'>
        <div className='addcake-wrapper bd-0 br'>
            <div className='df '>
                <button className='close-btn df' onClick={() => setIsOpen((isOpen) => !isOpen)}><MdClose/></button>
            </div>
            <form onSubmit={handleSubmit} className='p-1'>
                <input onChange={(e) => setCakeData({ ...cakeData, name: e.target.value })} className='input' placeholder='cake name'/>
                <input onChange={(e) => setCakeData({ ...cakeData, price: parseInt(e.target.value) })} className='input' placeholder='price'/>
                <label className='mr-1'>Image</label>
                <input onChange={(e) => setFile(e.target.files[0])} type='file'/>
                <button onClick={isAdd && handleSubmit} className='active-button'>Add Cake</button>
            </form>
        </div>
        </div>
    )
}
export default AddCake;