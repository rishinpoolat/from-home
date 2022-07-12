import React, { useEffect } from "react";
import RecipieCard from "../../components/RecipieCard/RecipieCard";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../actions/recipe";

import "./recipiePage.css";

export default function RecipiePage() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="df recipepage">
      <div className="df recipepage-container">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe._id}>
            <RecipieCard recipe={recipe} />
          </div>
        ))}
      </div>
      <div>
        <RecipeForm />
      </div>
    </div>
  );
}
