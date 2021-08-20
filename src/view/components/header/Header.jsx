import React from 'react';
import './header.scss'
import Bell from "../../../assets/img/bell.svg"
import Gift from "../../../assets/img/gift.svg"

function Header() {
    return (
        <div className="header">
            <header className="header__inner container">
                <div className="header__logo">gift&rarr;me</div>
                <div className="header__navbar">
                    <div className="header__navbar-item">О нас </div>
                    <div className="header__navbar-item_border">Регистрация</div>
                    <div className="header__navbar-item_border">Войти </div>

                    {/*<div className="header__navbar-item ">О нас </div>*/}
                    {/*<div className="header__navbar-item">Друзья</div>*/}
                    {/*<div className="header__navbar-item">Мой личный кабинет</div>*/}
                    {/*<div className="header__navbar-bell"><img src={Bell} alt=""/></div>*/}
                    {/*<div className="header__navbar-img"><img src={Gift} alt=""/></div>*/}
                    {/*<div className="header__navbar-item_border">Выйти </div>*/}
                </div>
            </header>
        </div>
    );
}

export default Header;