import React from 'react';
import {Link} from "react-router-dom"
import './userSidePanel.scss'
import Home from "../../../assets/img/home.svg";
import Friends from "../../../assets/img/friends.svg";
import Party from "../../../assets/img/party.svg";
import OpenGift from "../../../assets/img/gift_dash.svg";

function UserSidePanel(props) {
    return (
        <div>
            <section className="side__panel">
                <div className="side__panel-sticky">
                    <div className="side__panel-items">
                        <Link to="/dashboard">
                            <div className="side__panel-item">
                                <span><img src={Home} alt=""/></span>
                                Личный кабинет
                            </div>
                        </Link>
                        <Link to="/friends">
                            <div className="side__panel-item">
                                <span><img src={Friends} alt=""/></span>
                                Друзья
                            </div>
                        </Link>
                        <Link to={`/userholidays/${props.item?.id}`}>
                            <div className="side__panel-item">
                                <span><img src={Party} alt=""/></span>
                                Праздники
                            </div>
                        </Link>
                        <Link to={`/userwishes/${props.item?.id}`}>
                            <div className="side__panel-item">
                                <span><img src={OpenGift} alt=""/></span>
                                Список желаний
                            </div>
                        </Link>
                    </div>
                    <button className="side__panel-btn">Поделиться</button>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default UserSidePanel;