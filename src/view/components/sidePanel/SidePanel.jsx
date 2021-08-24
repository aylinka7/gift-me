import React from 'react';
import './sidePanel.scss'
import Home from "../../../assets/img/home.svg";
import Friends from "../../../assets/img/friends.svg";
import Party from "../../../assets/img/party.svg";
import OpenGift from "../../../assets/img/gift_dash.svg";
import CloseGift from "../../../assets/img/gift_close.svg";

function SidePanel() {
    return (
        <div>
            <section className="side__panel">
                <div className="side__panel-items">
                    <div className="side__panel-item">
                        <span><img src={Home} alt=""/></span>
                        Личный кабинет
                    </div>
                    <div className="side__panel-item">
                        <span><img src={Friends} alt=""/></span>
                        Мои друзья
                    </div>
                    <div className="side__panel-item">
                        <span><img src={Party} alt=""/></span>
                        Мои праздники
                    </div>
                    <div className="side__panel-item">
                        <span><img src={OpenGift} alt=""/></span>
                        Мой список желаний
                    </div>
                    <div className="side__panel-item">
                        <span><img src={CloseGift} alt=""/></span>
                        Корзина
                    </div>



                    {/*<div className="side__panel-item">*/}
                    {/*    <span><img src={Home} alt=""/></span>*/}
                    {/*    Личный кабинет*/}
                    {/*</div>*/}
                    {/*<div className="side__panel-item">*/}
                    {/*    <span><img src={Friends} alt=""/></span>*/}
                    {/*    Друзья*/}
                    {/*</div>*/}
                    {/*<div className="side__panel-item">*/}
                    {/*    <span><img src={Party} alt=""/></span>*/}
                    {/*    Праздники*/}
                    {/*</div>*/}
                    {/*<div className="side__panel-item">*/}
                    {/*    <span><img src={OpenGift} alt=""/></span>*/}
                    {/*    Список желаний*/}
                    {/*</div>*/}
                </div>
                <button className="side__panel-btn">Поделиться </button>
            </section>
        </div>
    );
}

export default SidePanel;