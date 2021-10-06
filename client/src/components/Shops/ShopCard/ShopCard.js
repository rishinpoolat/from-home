import React from 'react';
import './shopCard.css'

function ShopCard({ shop }) {
  return (
  <div className='card fd-c df'>
    <div className='card-hero'>
      <img className='card-hero' src={shop.banner} alt='card-hero'/>
    </div>
  <div className='card-content'>
    <div className='card-header ai-c df'>
      <img className='card-logo' src={shop.logo} alt='logo'/>
      <div className='card-title'>
        <h3 className='name'>{shop.shopName}</h3>
        <p className='location'>{shop.district}</p>
      </div>
    </div>
    <p>⭐️⭐️⭐️⭐️</p>
    <div className='card-body'>
      <p className='description'>{shop.description}</p>
      <button className='active-button'>view more</button>
    </div>
  </div>
</div>
  )
}

export default ShopCard




