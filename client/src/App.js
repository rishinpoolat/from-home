import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import { getShops } from "./actions/shops";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import Products from "./pages/Admin/Products/Products";
import Orders from "./pages/Admin/Orders/Orders";
import Add from "./pages/Admin/Products/Add/Add";
import Admin from "./pages/Admin/Admin";
import { getCakes } from "./actions/cake";

const App = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops);
  const cakes = useSelector((state) => state.cakes);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getShops());
    dispatch(getCakes());
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage shops={shops} cakes={cakes} />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/shopregister">
            <ShopRegister user={user} />
          </Route>
          <Route path="/user/:id">
            <UserProfile user={user} />
          </Route>
          <Route path="/shops/:shopId">
            <SingleShop />
          </Route>
          <Route path="/shopedit">
            <ShopEdit />
          </Route>
          <Route path="/recipie">
            <RecipiePage user={user} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/admin/products/add">
            <div className="df">
              <AdminSidebar className="admin-sidebar" />
              <Add />
            </div>
          </Route>
          <Route path="/admin/products">
            <div className="df">
              <AdminSidebar className="admin-sidebar" />
              <Products />
            </div>
          </Route>
          <Route path="/admin">
            <div className="df">
              <Admin />
            </div>
          </Route>
          <Route path="/admin/orders">
            <div className="df">
              <AdminSidebar />
              <Orders />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
