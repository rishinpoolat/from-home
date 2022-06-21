import { useState } from "react";
import "./cartItem.css";

const CartItem = () => {

  const [quantity, setQuantity] = useState(1);

    const headerImg1 = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60';
    
    
  return (
    <div className='cart-items' >
    <div className='df'>
      <img className="cart-img "src={headerImg1} alt="cart-img"/>
   
        <div className="cart-right df fd-c">
          <div className="df fd-c">
            <span className="cart-item-name">Name : <span>Black Forest</span></span>
            <span className="cart-item-name">Price : <span>$43</span></span>
            
            <span>Quantity</span>
            <div className="df ai-c">
              <button className="bn qty-btn" onClick={() => setQuantity((quantity && quantity - 1))}>-</button>
              <span className="cart-item-qty">{quantity}</span>
              <button className="bn qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
          <button className='cart-btn'>remove from cart</button>
        </div>
    </div>
    
    </div>
          

  
       
  )
}

export default CartItem

