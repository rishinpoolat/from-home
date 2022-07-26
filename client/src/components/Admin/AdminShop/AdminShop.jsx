import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {MdClose} from 'react-icons/md'
import { getShop } from '../../../redux/features/shopSlice';
import CakeCard from '../CakeCard/CakeCard';
import './adminshop.css'
import axios from 'axios';
import { addNewCake, fetchCakesOfShop } from '../../../redux/features/cakeSlice';

const AdminShop = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {shop} = useSelector((state) => state.shops);
    const {shopCakes} = useSelector((state) => state.cakes);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        dispatch(getShop(id));
        dispatch(fetchCakesOfShop(id));
    },[dispatch, id]);
    console.log(shopCakes);

  return (
    <div className='admin-shop w-100'>
    {
        <div className='admin-shop-details w-100 br bd-0 df p-1 fd-c mb-1'>
            <span>Shop Name : {shop?.shopName}</span>
            <span>Email : {shop?.email}</span>
            <span>Phone : {shop?.shopPhone}</span>
            <span>Description : {shop?.description}</span>
            <span>District : {shop?.district}</span>
            <span>Address : {shop?.address}</span>
        </div>
    }
    <div className='df'>
        <div className='text-center flex-1 p-1'>
            <h3>Products</h3>
            <div className='df fd-c'>
                {shopCakes.map((cake) => (
                    <div key={cake._id}>
                        <CakeCard cake={cake}/>
                    </div>
                ))}
            </div>
            <button onClick={() => setIsOpen((isOpen) => !isOpen)} className='active-button'>Add a New Product</button>
        </div>
        <div className='text-center flex-1 p-1'>
            <h3>Orders</h3>
        </div>
        </div>
        {isOpen && <AddCake isOpen={isOpen} id={id} setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default AdminShop

const AddCake = ({isOpen, setIsOpen, id}) => {
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
            dispatch(addNewCake({cakeData}));
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
                <button onClick={handleSubmit} className='active-button'>Add Cake</button>
            </form>
        </div>
        </div>
    )
}