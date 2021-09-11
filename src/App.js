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
import API from "./api/index"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Undefined from "./view/pages/undefined/Undefined";
import Friends from "./view/pages/friends/Friends";
import MyHolidays from "./view/pages/myHolidays/MyHolidays";
import {ProfileSettings} from "./view/pages/profileSettings/ProfileSettings";
import {RegistrRoute} from "./router/registrRoute/RegistrRoute";
import User from "./view/pages/user/User";
import UserWishes from "./view/pages/userWishes/UserWishes";
import UserHolidays from "./view/pages/userHolidays/UserHolidays";
import {useDispatch} from "react-redux";
import {setName5} from "./store/actions/actions";

function App() {
    const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(isAuth))
    }, [isAuth])

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

    const dispatch = useDispatch();

    const [name2, setName2] = useState("")
    const [surname2, setSurname2] = useState("")
    const [aboutMe2, setAboutMe2] = useState("")
    const [facebook2, setFacebook2] = useState("")
    const [insta2, setInsta2] = useState("")

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [aboutMe, setAboutMe] = useState("")
    const [facebook, setFacebook] = useState("")
    const [insta, setInsta] = useState("")
    const [birthDate, setBirthDate] = useState("Дата")
    const [birthDay, setBirthDay] = useState("День")
    const [birthMonth, setBirthMonth] = useState("Месяц")
    const [birthYear, setBirthYear] = useState("Год")
   useEffect(() => {
       if(isAuth) {
           API.getUser(JSON.parse(localStorage.getItem("user"))?.user_id)
               .then((res) => {
                   dispatch(setName5(res.data))
                   setName2(res.data.first_name)
                   setInsta2(res.data.instagram_link)
                   setFacebook2(res.data.facebook_link)
                   setAboutMe2(res.data.description)
                   setSurname2(res.data.last_name)

                   // setName(res.data.first_name)
                   // setSurname(res.data.last_name)
                   // setEmail(res.data.email)
                   // setBirthDate(res.data.birth_date)
                   // setAboutMe(res.data.description)
                   // setFacebook(res.data.facebook_link)
                   // setInsta(res.data.instagram_link)
               })
       }
   }, [name2, surname2, aboutMe2])                               // TODO
    useEffect(() => {
        let arr = birthDate.split("-")
        
        setBirthDay(arr[2])
        setBirthMonth(arr[1])
        setBirthYear(arr[0])
    }, [birthDate])

    const clear = () => {
        let arr = birthDate.split("-")
        setBirthDay(arr[2])
        setBirthMonth(arr[1])
        setBirthYear(arr[0])
        // setName(name2)
        // setSurname(surname2)
        // setInsta(insta2)
        // setFacebook(facebook2)
    }
    const exit = () => {
        setIsAuth(null);
    }
    return (
        <Router>
            <div>
                <Header isAuth={isAuth}
                        exit={exit}/>
                <Switch>
                    <OpenRoute path="/auth" isAuth={isAuth} Component={() => <Auth setIsAuth={setIsAuth}/>} />
                    <RegistrRoute path="/sign-up" isAuth={isAuth} Component={() => <Registr isAuth={isAuth} />} />
                    <PrivateRoute path="/user/:id" isAuth={isAuth} Component={User} />
                    <PrivateRoute path="/userwishes/:id" isAuth={isAuth} Component={UserWishes} />
                    <PrivateRoute path="/userholidays/:id" isAuth={isAuth} Component={UserHolidays} />
                    <PrivateRoute path="/dashboard" isAuth={isAuth} Component={() =>
                        <Dashboard
                            ava={ava}
                            bg={bg}
                            name={name}
                            surname={surname}
                            email={email}
                            aboutMe={aboutMe}
                        />}
                    />
                    <PrivateRoute path="/mywishes" isAuth={isAuth} Component={MyWishes} />
                    <PrivateRoute path="/myholidays" isAuth={isAuth} Component={MyHolidays} />
                    <PrivateRoute path="/busket" isAuth={isAuth} Component={Busket} />
                    <PrivateRoute path="/friends" isAuth={isAuth} Component={() => <Friends isAuth={isAuth} />} />
                    <PrivateRoute path="/profilesettings" isAuth={isAuth} Component={() =>
                        <ProfileSettings
                            handleAvaChange={handleAvaChange}
                            handleBgChange={handleBgChange}
                            birthDay={birthDay}
                            birthMonth={birthMonth}
                            birthYear={birthYear}
                            setBirthDay={setBirthDay}
                            setBirthDate={setBirthDate}
                            setBirthMonth={setBirthMonth}
                            setBirthYear={setBirthYear}
                            setName={setName}

                            clear={clear}
                        />}
                    />
                    <Route exact path="/">
                        <Main isAuth={isAuth}/>
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
