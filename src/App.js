import React, {useEffect, useState} from 'react';
import Header from "./view/components/header/Header";
import Main from "./view/pages/main/Main";
import Footer from "./view/components/footer/Footer";
import Auth from "./view/pages/auth/Auth";
import Registr from "./view/pages/registr/Registr";
import Dashboard from "./view/pages/dashboard/Dashboard";
import MyWishes from "./view/pages/myWishes/MyWishes";
import Busket from "./view/pages/basket/Busket";

import {PrivateRoute} from "./router/privateRoute/PrivateRoute";
import {OpenRoute} from "./router/openRoute/OpenRoute";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";

import Undefined from "./view/pages/undefined/Undefined";
import Friends from "./view/pages/friends/Friends";
import MyHolidays from "./view/pages/myHolidays/MyHolidays";
import {ProfileSettings} from "./view/pages/profileSettings/ProfileSettings";
import API from "./api";


function App() {
    const [ava, setAva] = useState(null)
    const [bg, setBg] = useState(null)
    const handleAvaChange = (e) => {
        if(e.target.files !== null && e.target.files.length) {
            console.log(e.target.files)
            const file = e.target.files[0]
            const reader = new FileReader();  // функция конструктор
            reader?.readAsDataURL(file);
            reader.onload = (e) => {
                if (e.target !== null) {
                    const newUrl = e.target.result;
                    setAva(newUrl)
                }
            }
        }
    }
    const handleBgChange = (e) => {
        if(e.target.files !== null && e.target.files.length) {
            console.log(e.target.files)
            const file = e.target.files[0]
            const reader = new FileReader();  // функция конструктор
            reader?.readAsDataURL(file);
            reader.onload = (e) => {
                if (e.target !== null) {
                    const newUrl = e.target.result;
                    setBg(newUrl)
                }
            }
        }
    }

    const [name, setName] = useState("whoknows")
    const [surname, setSurname] = useState("whoknows")

    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(isAuth))
        // if(isAuth){
        //     API.getUser(id)
        //         .then((res) => {
        //             setUser(res.data)
        //         })
        // }
    }, [isAuth])
    const exit = () => {
        setIsAuth(null);
        // history.push('/auth')
    }
    return (
        <Router>
            <div>
                <Header isAuth={isAuth}
                        exit={exit}/>
                <Switch>
                    <OpenRoute path="/auth" Component={() => <Auth setIsAuth={setIsAuth}/>} isAuth={isAuth}/>
                    <OpenRoute path="/sign-up" Component={Registr} isAuth={isAuth}/>
                    <PrivateRoute path="/dashboard" isAuth={isAuth} Component={() =>
                        <Dashboard
                            ava={ava}
                            bg={bg}
                            name={name}
                            surname={surname}
                        />
                    }/>
                    <Route path="/mywishes">
                        <MyWishes/>
                    </Route>
                    <Route path="/myholidays">
                        <MyHolidays />
                    </Route>
                    <Route path="/busket">
                        <Busket/>
                    </Route>
                    <Route path="/friends">
                        <Friends />
                    </Route>
                    <Route path="/profilesettings">
                        <ProfileSettings
                        handleAvaChange={handleAvaChange}
                        handleBgChange={handleBgChange}
                        name={name}
                        setName={setName}
                        setSurname={setSurname}
                        surname={surname}
                        nameIsEdit={name.isEdit}
                        surnameIsEdit={surname.isEdit}
                        />
                    </Route>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route exact path="*">
                        <Undefined/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
