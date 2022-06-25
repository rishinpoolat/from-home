import React from 'react';
import Order from '../../../components/Admin/Order/Order';
import './orders.css';

const Orders = () => {
  return (
    <div className='order'>
        <h1>Orders</h1>
        <div>
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
    </div>
  )
}

export default Orders;