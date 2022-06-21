import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes } from '../../actions/recipe';
import RecipieCard from '../../components/RecipieCard/RecipieCard'
import "./recipiePage.css";

export default function RecipiePage() {

    return (
        <div className='df recipiepage'>
            <RecipieCard/>
        </div>
    )
}
