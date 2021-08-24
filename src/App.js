import React, {useEffect, useState} from 'react';
import Header from "./view/components/header/Header";
import Main from "./view/pages/main/Main";
import Footer from "./view/components/footer/Footer";
import Auth from "./view/pages/auth/Auth";
import Registr from "./view/pages/registr/Registr";
import Dashboard from "./view/pages/dashboard/Dashboard";
import MyWishes from "./view/pages/myWishes/MyWishes";
import Busket from "./view/pages/basket/Busket";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import axios from "axios"
import API from './api/index'
import Undefined from "./view/pages/undefined/Undefined";



function App() {
    const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(isAuth))
    }, [isAuth])
  return (
      <Router>
        <div>
          <Header />
            <Switch>
                <Route path="/auth">
                    <Auth setIsAuth={setIsAuth} />
                </Route>
                <Route path="/sign-up">
                    <Registr />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/mywishes">
                    <MyWishes />
                </Route>
                <Route path="/busket">
                    <Busket />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="*">
                    <Undefined />
                </Route>
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
