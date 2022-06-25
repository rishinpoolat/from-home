import React from 'react'
import Product from '../../../components/Admin/Product/Product'
import './products.css'
const Products = () => {
  return (
    <div className='admin-products df fd-c'>
    <div className='df jc-sb mb-1'>
      <h2>Products</h2>
      <button className='active-button add-btn'>Add +</button> 
    </div>
         
          <div className='df fd-c ai-c'>
            <Product />
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
         
        </div> 
  )
}

export default Products