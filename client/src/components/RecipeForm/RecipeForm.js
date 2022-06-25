import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipe } from "../../actions/recipe";
import './recipeForm.css'

const RecipeForm = () =>  {

  const [recipe, setRecipe] = useState({ userId: "", name: "", ingredients: "", description: "" });

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    user && recipe.userId(user.result._id);
    console.log(recipe);
    dispatch(createRecipe(recipe));
    
  }

  return (
    <div className='recipeForm fd-c ai-c df bd-0 br'>
      <h2>Have a Recipie ? </h2>
      <h4>Share with us</h4>
      <form className="recipeForm-form df fd-c" onSubmit={handleSubmit}>
        <input onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} type="text" className="recipeForm-input input" placeholder='Name of Item'/>
        <textarea rows="4" cols="35" onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} type="text" className="recipeForm-textarea input" placeholder='Ingridients'></textarea>
        <textarea onChange={(e) => setRecipe({ ...recipe, description: e.target.value })} className='recipeForm-textarea input' name="recipie" rows="10" cols="35" placeholder='Enter your recipie' ></textarea>  
        <button onClick={handleSubmit} className="active-button bs-0">Share</button>
        <button className="recipeForm-button-clear link active-button">Clear</button>
      </form>
    </div>
  )
}

export default RecipeForm;
