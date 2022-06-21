import React from 'react'
import './cart.css'
import CartItem from "../../components/CartItem/CartItem"

const Cart = () => {

    
  return (
    <div className='cart df fd-c ai-c'>
            <h1 className='cart-heading'>my cart</h1>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>

        <div className='cart-bottom'><h3>sub total =${3+5} </h3>
        <button className='active-button'>proceed to pay</button></div>
        
    </div>
  )
}

export default Cart