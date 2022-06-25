import React from 'react';
import RecipieCard from '../../components/RecipieCard/RecipieCard'
import "./recipiePage.css";
import RecipeForm from '../../components/RecipeForm/RecipeForm';

export default function RecipiePage({recipes}) {


    return (
        <div className='df recipepage'>
            <div className='df recipepage-container'>
            {recipes.map((recipe) => <div key={recipe._id}>
            
                <RecipieCard recipe={recipe}/>
            </div>)}
            </div>
            <div><RecipeForm /></div>
        </div>
    )
}
