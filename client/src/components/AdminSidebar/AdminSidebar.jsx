import React from 'react'
import { Link } from 'react-router-dom';
import {RiBillFill,RiShoppingBag3Fill} from 'react-icons/ri';


import './adminSidebar.css';


const AdminSidebar = () => {
  return (
    <div className='admin-sidebar df fd-c bs-1 p-1'>
    <h2 className='mb-1'>Get Started</h2>
    <Link className='admin-sidebar-card mb-1 link br' to='/admin/products'><RiShoppingBag3Fill className='mr-0'/>PRODUCTS</Link>
    <Link className='admin-sidebar-card mb-1 link br df ai-c' to='/admin/orders'><RiBillFill className='mr-0' /> ORDERS</Link>
    </div>
  )
}

export default AdminSidebar