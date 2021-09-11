import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom"
import '../auth/auth.scss'
import API from '../../../api/index'

function Registr() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPas, setConfirmPas] = useState("")
    const [coinside, setCoinside] = useState("")
    const [users, setUsers] = useState([])
    const [authEmail, setAuthEmail] = useState("")
    const history = useHistory()
    useEffect(() => {
        // if (users.map(item => item.email === email)) {
        //     setAuthEmail("Пользователь с такой почтой уже существует")
        // }
    }, [])
    const submit = (e) => {
        e.preventDefault();
        if (password === confirmPas) {
            const user = {
                email,
                password,
            }
            API.createUser(user)
                .then((res) => {
                    localStorage.setItem("user", JSON.stringify((res.data)))
                    history.push("/dashboard")
                })
                .catch((error) => {
                    setAuthEmail(error.response.data.email[0])
                })
        } else {
            setCoinside("Пароли не совпадают")
        }
    }

    return (
        <div className="auth">
            <h2 className="auth__title">Регистрация</h2>
            <div className="auth__gmail">регистрация через <a href="#" className="auth__link">Gmail</a></div>
            <form onSubmit={submit} className="auth__form">
                <p className="auth__star">&nbsp;&nbsp; * {authEmail}</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <p className="auth__star">&nbsp;&nbsp; *</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"
                       type="password"/>
                <p className="auth__symbols">&nbsp;&nbsp;&nbsp; Не менее 8 символов.</p>
                <p className="auth__star">&nbsp;&nbsp; * {coinside}</p>
                <input value={confirmPas} onChange={(e) => setConfirmPas(e.target.value)}
                       placeholder="Потвердить пароль" type="password" className="auth__input"/>
                <div>
                    <button type="submit" className="auth__btn">Зарегистрироваться</button>
                </div>
            </form>
            <p className="auth__acc">Есть аккаунт? </p>
            <Link to="/auth">
                <div className="auth__reg">Войти</div>
            </Link>
        </div>
    );
}

export default Registr;