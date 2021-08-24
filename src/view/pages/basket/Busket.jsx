import React from 'react';
import './busket.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Profile from '../../../assets/img/profile.svg'
import Plus from "../../../assets/img/plus.svg";
import Star from "../../../assets/img/star (1).svg";
import Edit from "../../../assets/img/edit.svg";

function Busket() {
    return (
        <div className="wrapper">
            <SidePanel />
            <div className="busket">
                <h1 className="busket__title">Корзина</h1>
                <button className="busket__btn"><span><img src={Plus} alt=""/></span>Добавь подарок</button>
                <div className="busket__blocks">
                    <div className="busket__block">
                        <div className="busket__block-about">
                            <span className="busket__block-img"><img src={Profile} alt=""/></span>
                            <div className="busket__block-texts">
                                <div className="busket__block-name">Курманова Айгерим</div>
                                <div className="busket__block-title">Книга</div>
                                <p className="busket__block-desc">Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today).....</p>
                                <a href="https://www.thingstogetme.com/177412af2132" className="busket__block-link">https://www.thingstogetme.com/177412af2132</a>
                                <p className="busket__block-desc">дата</p>
                            </div>
                        </div>
                        <div className="busket__block-act">
                            <span className="busket__block-fav"><img src={Star} alt=""/></span>
                            <span className="busket__block-edit"><img src={Edit} alt=""/></span>
                        </div>
                    </div>
                    <div className="busket__block">
                        <div className="busket__block-about">
                            <span className="busket__block-img"><img src={Profile} alt=""/></span>
                            <div className="busket__block-texts">
                                <div className="busket__block-name">Курманова Айгерим</div>
                                <div className="busket__block-title">Книга</div>
                                <p className="busket__block-desc">Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today).....</p>
                                <a href="https://www.thingstogetme.com/177412af2132" className="busket__block-link">https://www.thingstogetme.com/177412af2132</a>
                                <p className="busket__block-desc">дата</p>
                            </div>
                        </div>
                        <div className="busket__block-act">
                            <span className="busket__block-fav"><img src={Star} alt=""/></span>
                            <span className="busket__block-edit"><img src={Edit} alt=""/></span>
                        </div>
                    </div>
                    <div className="busket__block">
                        <div className="busket__block-about">
                            <span className="busket__block-img"><img src={Profile} alt=""/></span>
                            <div className="busket__block-texts">
                                <div className="busket__block-name">Курманова Айгерим</div>

                                <div className="busket__block-title">Книга</div>
                                <p className="busket__block-desc">Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today).....</p>
                                <a href="https://www.thingstogetme.com/177412af2132" className="busket__block-link">https://www.thingstogetme.com/177412af2132</a>
                                <p className="busket__block-desc">дата</p>
                            </div>
                        </div>
                        <div className="busket__block-act">
                            <span className="busket__block-fav"><img src={Star} alt=""/></span>
                            <span className="busket__block-edit"><img src={Edit} alt=""/></span>
                        </div>
                    </div>
                    <div className="busket__block">
                        <div className="busket__block-about">
                            <span className="busket__block-img"><img src={Profile} alt=""/></span>
                            <div className="busket__block-texts">
                                <div className="busket__block-name">Курманова Айгерим</div>

                                <div className="busket__block-title">Книга</div>
                                <p className="busket__block-desc">Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today).....</p>
                                <a href="https://www.thingstogetme.com/177412af2132" className="busket__block-link">https://www.thingstogetme.com/177412af2132</a>
                                <p className="busket__block-desc">дата</p>
                            </div>
                        </div>
                        <div className="busket__block-act">
                            <span className="busket__block-fav"><img src={Star} alt=""/></span>
                            <span className="busket__block-edit"><img src={Edit} alt=""/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Busket;