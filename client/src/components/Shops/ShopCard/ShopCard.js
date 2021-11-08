import React from 'react';
import './shopCard.css'

export default function ShopCard ({ shop }) {
  return (
    <div className='card-container'>
  <div className='card'>
    <div className='card-hero'>
  <img className='card-hero' src={shop.banner} alt='card-hero'/>
    </div>
  <div className='card-content'>
    <div className='card-header'>
      <img className='card-logo' src={shop.logo} alt='logo'/>
      <div className='card-title'>
        <h3 className='name'>{shop.shopName}</h3>
        <p className='location'>{shop.district}</p>
      </div>
    </div>
    <p>⭐️⭐️⭐️⭐️</p>
    <div className='card-body'>
      <p className='description'>{shop.description}</p>
      <button className='card-btn'>view more</button>
    </div>
  </div>
</div>
</div>
  )
}






