import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {RiShoppingBag3Fill} from 'react-icons/ri';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserShops } from '../../../redux/features/shopSlice';
import './adminSidebar.css';


const AdminSidebar = () => {
  const user = JSON.parse(localStorage.getItem("profile"))
  const dispatch = useDispatch();
  const id = user?.result?._id;
  const {userShops} = useSelector((state)=> state.shops);
  useEffect(() => {
    dispatch(fetchUserShops(id));
  }, [dispatch, id]);
  return (
    <div className='admin-sidebar df fd-c bs-1 p-1'>
    <Link className='link' to={`/admin/${id}`}>
      <h2 className='mb-1 df ai-c br'>Get Started <AiOutlineArrowRight className='ml-1'/></h2>
    </Link>
    {userShops.map((shop) => (
    <Link key={shop._id} className='admin-sidebar-card mb-1 link br' 
    to={`/admin/user/${id}/shop/${shop._id}`}><RiShoppingBag3Fill className='mr-0'/>{shop.shopName}</Link>

    ))}
    </div>
  )
}

export default AdminSidebar