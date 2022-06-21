import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { createRecipe } from "../../actions/recipe";
import './sidebar.css'

function SideBar() {

  const [recipe, setRecipe] = useState({ userId: "", name: "", ingredients: "", description: "" });

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
    dispatch(createRecipe(recipe));
  }

  return (
    <div className='sidebar fd-c ai-c df'>
      <h2>Have a Recipie ? </h2>
      <h4>Share with us</h4>
      <form className="sidebar-form" onSubmit={handleSubmit}>
        <input onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} type="text" className="sidebar-input input" placeholder='Name of Item'/>
        <input onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} type="text" className="sidebar-input input" placeholder='Ingridients'/>
        <textarea onChange={(e) => setRecipe({ ...recipe, description: e.target.value })} className='sidebar-textarea input' name="recipie" rows="10" cols="35" placeholder='Enter your recipie' ></textarea>  
        <button onClick={handleSubmit} className="active-button">Share</button>
        <button className="sidebar-button-clear link active-button">Clear</button>
      </form>
      <div className="touch-with-us fd-c df">
        <h3>Touch With Us</h3>
        <ul className='social-icons-list ai-c df'>
          <Link className='social-icon' to='www.instagram.com'><i className="fab fa-instagram"></i></Link>
          <Link className='social-icon' to='www.facebook.com'><i className="fab fa-facebook"></i></Link>
          <Link className='social-icon' to='www.twitter.com'><i className="fab fa-twitter"></i></Link>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
