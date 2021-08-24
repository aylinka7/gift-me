import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom"
import './auth.scss'
import API from "../../../api";

function Auth(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const submit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        }
        API.createJWT(user)
            .then((res) => {
                props.setIsAuth(res.data)
                if(res.status === 200) {
                    history.push("/dashboard")
                }
            })
    }
    return (
        <div className="auth">
            <h2 className="auth__title">Авторизация</h2>
            <div className="auth__gmail">регистрация через <a href="#" className="auth__link">Gmail</a></div>
            <form onSubmit={submit} className="auth__form">
                <p className="auth__star">&nbsp;&nbsp; *</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <p className="auth__star">&nbsp;&nbsp; *</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password"/>
                <p className="auth__symbols">&nbsp;&nbsp;&nbsp; Не менее 8 символов.</p>
                <a href="#" className="auth__forgot">Забыли пароль?</a>
                <div><button type="submit" className="auth__btn">Войти</button></div>
            </form>
            <p className="auth__acc">У вас еще нет аккаунта?</p>
            <Link to="/sign-up"><div className="auth__reg">Зарегистрироваться </div></Link>
        </div>
    );
}

export default Auth;