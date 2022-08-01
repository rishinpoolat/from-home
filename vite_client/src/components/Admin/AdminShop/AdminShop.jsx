import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getShop } from '../../../redux/features/shopSlice';
import CakeCard from '../CakeCard/CakeCard';
import Loading from '../../Loading/Loading'
import './adminshop.css'
import AddCake from '../AddCake/addCake';
import { fetchCakesOfShop } from '../../../redux/features/cakeSlice';

const AdminShop = () => {
    const location = useLocation();
    const path = location.pathname;
    const {id} = useParams();
    const dispatch = useDispatch();
    const {shop} = useSelector((state) => state.shops);
    const {shopCakes, loading} = useSelector((state) => state.cakes);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        dispatch(fetchCakesOfShop(id));
        dispatch(getShop(id));
    },[dispatch, id]);

  return loading ? ( <><Loading/></>) : (
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
                {shopCakes.length > 0 && shopCakes[0]?.map((cake) => (
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
        {isOpen && <AddCake path={path} isAdd={true} id={id} setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default AdminShop

