import React from 'react';
import { Link } from 'react-router-dom'; 
import './shopCard.css'

export default function ShopCard ({ shop }) {

  const handleClick = () => {
    console.log(shop)
  }

  return (
  <div className='card fd-c df' onClick={handleClick}>
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
      <Link to={`/shops/${shop._id}`}><button className='active-button'>view more</button></Link>
    </div>
  </div>
</div>
  )
}






