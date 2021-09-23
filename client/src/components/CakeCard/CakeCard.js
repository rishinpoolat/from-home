import './cakeCard.css'

export default function CakeCard() {

  const addToWishlist = (e) => {
    if(e.target.className === "fas fa-heart"){
      e.target.className = 'far fa-heart';
    }else{
      e.target.className = 'fas fa-heart';
    }
      }
      
  return (
    <div className='cakecard'>
      <img src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" className="cakecard-img" />
      <div className="cakecard-buttons  ai-c df">
        <button className="active-button">Add to cart<i className="fas fa-cart-plus"></i></button>
        <button className="active-button">Buy now<i className="fas fa-arrow-right"></i></button>
        <i onClick={addToWishlist} className="far fa-heart"></i>
      </div>
    </div>
  )
}
