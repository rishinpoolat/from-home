import { useState } from 'react';

import Product from '../../components/Admin/Product/Product';
import Orders from '../../components/Admin/Orders/Orders';
import NewProduct from '../../components/Admin/NewProduct/NewProduct';
import './admin.css';

// TODO
// CREATE DELETE UPDATE READ CAKE/SHOP
// ORDERS

const Admin = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <div className='df admin-container
    '>
    {open && <div className='admin-window'>
    <NewProduct />
    <div onClick={() => setOpen((prev) => !prev)}><CloseBtn/></div>
    </div>}
       <div className='admin-products'>
       <h2>Products</h2> 
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
       <button onClick={() => setOpen((prev) => !prev)} className='active-button'>add new product</button>
       </div> 
       <div className='admin-orders'>
        <h2>Orders</h2>
        <Orders/>
        <Orders/>
        <Orders/>
        <Orders/>
        <Orders/>
        <Orders/>


       </div>
    </div>
  )
}

export default Admin;

const CloseBtn = () => {
  return (
    <>
      <div className='close-btn'>close</div>
    </>
  );
}


