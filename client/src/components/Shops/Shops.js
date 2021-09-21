import React from 'react';
import { CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';
import ShopCard from './ShopCard/ShopCard';

import './shops.css'

export default function Shops() {
  const shops = useSelector((state) => state.shops);

  console.log(shops);

  return (
    !shops.length ? <CircularProgress/> : (
      <>
      {shops.map((shop) => (
        <div key={shop._id}>
          <ShopCard shop={shop}/>
        </div>
      ))}
      </>
    )
  )
}
