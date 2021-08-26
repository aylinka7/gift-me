import React from 'react';
import {Link, useHistory} from "react-router-dom"
import './header.scss'
import Bell from "../../../assets/img/bell.svg"
import Gift from "../../../assets/img/gift.svg"

function Header(props) {
    return (
        <div className="header">
            <header className="header__inner container">
                <Link to="/"><div className="header__logo">gift&rarr;me</div></Link>
                {
                    props.isAuth === null
                    ?
                    <div className="header__navbar">
                        <Link to="/"><div className="header__navbar-item">О нас </div></Link>
                        <Link to="/sign-up"><div className="header__navbar-item_border">Регистрация</div></Link>
                        <Link to="/auth"><div className="header__navbar-item_border">Войти </div></Link>
                    </div>
                    :
                    <div className="header__navbar">
                        <Link to="/"><div className="header__navbar-item ">О нас </div></Link>
                        <Link to="/friends"><div className="header__navbar-item">Друзья</div></Link>
                        <Link to="/dashboard"><div className="header__navbar-item">Мой личный кабинет</div></Link>
                        <Link to="/myholidays"><div className="header__navbar-bell"><img src={Bell} alt=""/></div></Link>
                        <Link to="/mywishes"><div className="header__navbar-img"><img src={Gift} alt=""/></div></Link>
                        <div onClick={props.exit} className="header__navbar-item_border">Выйти </div>
                    </div>
             }
            </header>
        </div>
    );
}

export default Header;