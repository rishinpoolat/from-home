import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopRegister from "./pages/ShopRegister/ShopRegister";
import HomePage from "./pages/HomePage/HomePage";
import UserRegister from "./pages/UserRegister/UserRegister";

import "./style.css";
import SingleShop from "./pages/SingelShop/SingleShop";
import UserLogin from "./pages/UserLogin/UserLogin";
import UserProfile from "./pages/UserProfile/UserProfile";
import ShopEdit from "./pages/ShopEdit/ShopEdit";
import RecipiePage from "./pages/RecipiePage/RecipiePage";

function App() {
  const islogin = true;

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/userregister">
            {islogin ? <HomePage /> : <UserRegister />}
            {/* <UserRegister/> */}
          </Route>
          <Route path="/userlogin">
            {islogin ? <HomePage /> : <UserLogin />}
            {/* <UserLogin/> */}
          </Route>
          <Route path="/shops/shopregister">
            {/* {islogin ? <HomePage /> : <ShopRegister />} */}
            <ShopRegister />
          </Route>
          <Route path="/userprofile">
            {islogin ? <UserProfile /> : <UserLogin />}
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