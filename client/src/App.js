import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import ShopRegister from "./pages/ShopRegister/ShopRegister";
import HomePage from "./pages/HomePage/HomePage";
import { getRecipes } from './actions/recipe';

import SingleShop from "./pages/SingelShop/SingleShop";
import UserProfile from "./pages/UserProfile/UserProfile";
import ShopEdit from "./pages/ShopEdit/ShopEdit";
import RecipiePage from "./pages/RecipiePage/RecipiePage";
import Cart from "./pages/Cart/Cart";
import Auth from "./components/Auth/Auth";
import "./style.css";
import Admin from "./pages/Admin/Admin";

const App = () => {

  const dispatch = useDispatch();

    const recipes = useSelector((state) => state.recipe);

    console.log(recipes);

    useEffect(() => {
        dispatch(getRecipes);
    }, [dispatch]);
  
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/auth">
             <Auth />
          </Route>
          <Route path="/shops/shopregister">
            <ShopRegister />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
          </Route>
          <Route path="/shops/:shopId">
            <SingleShop />
          </Route>
          <Route path="/shopedit">
            <ShopEdit/>
          </Route>
          <Route path="/recipie">
          <RecipiePage/>
        </Route>
        <Route path="/cart">
        <Cart/>
        </Route>
        <Route path="/admin/:id">
        <Admin/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;