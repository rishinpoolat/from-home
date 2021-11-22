import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopRegister from "./pages/ShopRegister/ShopRegister";
import HomePage from "./pages/HomePage/HomePage";

import SingleShop from "./pages/SingelShop/SingleShop";
import UserProfile from "./pages/UserProfile/UserProfile";
import ShopEdit from "./pages/ShopEdit/ShopEdit";
import RecipiePage from "./pages/RecipiePage/RecipiePage";
import Auth from "./components/Auth/Auth";
import "./style.css";

function App() {
  
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
          {/* <Route path="/post/:id">
          <Single />
        </Route> */}
          <Route path="/shopedit">
            <ShopEdit/>
          </Route>
          <Route path="/recipie">
          <RecipiePage/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;