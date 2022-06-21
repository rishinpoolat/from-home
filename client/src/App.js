import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopRegister from "./pages/ShopRegister/ShopRegister";
import HomePage from "./pages/HomePage/HomePage";

import SingleShop from "./pages/SingelShop/SingleShop";
import UserProfile from "./pages/UserProfile/UserProfile";
import ShopEdit from "./pages/ShopEdit/ShopEdit";
import RecipiePage from "./pages/RecipiePage/RecipiePage";
import Cart from "./pages/Cart/Cart";
import Auth from "./components/Auth/Auth";
import "./style.css";
import Admin from "./pages/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "./actions/shops";

const App = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log(shops);

  useEffect(() => {
    dispatch(getShops());
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage shops={shops} />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/shops/shopregister">
            <ShopRegister user={user} />
          </Route>
          <Route path="/userprofile">
            <UserProfile user={user} />
          </Route>
          <Route path="/shops/:shopId">
            <SingleShop />
          </Route>
          <Route path="/shopedit">
            <ShopEdit />
          </Route>
          <Route path="/recipie">
            <RecipiePage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/admin/:id">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
