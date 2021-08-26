import React from 'react';
import './friendsBlock.scss'
import Ava from "../../../assets/img/circle.svg";

function FriendsBlock() {
    return (
        <div className="friends__block">
            <span className="friends__block-ava"><img src={Ava} alt=""/></span>
            <div className="friends__block-texts">
                <h3 className="friends__block-name">Курманова Айгерим</h3>
                <textarea placeholder="Описание о себе" name="" id="" cols="22" rows="2" className="friends__block-input"></textarea>
            </div>
        </div>
    );
}

export default FriendsBlock;