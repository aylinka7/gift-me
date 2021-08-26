import React from 'react';
import './myWishes.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Plus from '../../../assets/img/plus.svg'
import MyWishesBlock from "../../components/myWishesBlock/MyWishesBlock";

function MyWishes() {
    return (
        <div className="wrapper">
            <SidePanel />
            <div className="mywishes">
                <h1 className="mywishes__title">Мой список желаний</h1>
                <button className="mywishes__btn"><span><img src={Plus} alt=""/></span>Добавь подарок</button>
                <div className="mywishes__blocks">
                   <MyWishesBlock />
                   <MyWishesBlock />
                   <MyWishesBlock />
                   <MyWishesBlock />
                </div>
            </div>
        </div>
    );
}

export default MyWishes;