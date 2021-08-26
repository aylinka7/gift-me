import React from 'react';
import './busketBlock.scss'
import Profile from "../../../assets/img/profile.svg";
import NotDone from "../../../assets/img/clock.svg";
import More from "../../../assets/img/dots3.svg";

function BusketBlock() {
    return (
        <div className="busket__block">
            <div className="busket__block-about">
                <span className="busket__block-img"><img src={Profile} alt=""/></span>
                <div className="busket__block-texts">
                    <div className="busket__block-name">Курманова Айгерим</div>
                    <div className="busket__block-title">Книга</div>
                    <p className="busket__block-desc">This is the very beginning of your direct message history withOnly the two of you are in this conversation, and no one else can join it.<span>Learn more.....</span></p>
                </div>
            </div>
            <div className="busket__block-act">
                <span className="busket__block-fav"><img src={NotDone} alt=""/></span>
                <span className="busket__block-edit"><img src={More} alt=""/></span>
            </div>
        </div>
    );
}

export default BusketBlock;