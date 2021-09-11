import React from 'react';
import './userWishesBlock.scss'
import Book from "../../../assets/img/book.svg";
import Star from "../../../assets/img/star (1).svg";

function UserWishesBlock(props) {
    return (
        <div className="userwishes__block">
            <div className="userwishes__block-about">
                <span className="userwishes__block-img"><img src={Book} alt=""/></span>
                <div className="userwishes__block-texts">
                    <div className="userwishes__block-title">{props.item.name}</div>
                    <p className="userwishes__block-desc">{props.item.description}</p>
                    <a href={props.item.link} className="userwishes__block-link">{props.item.link}</a>
                    <p className="userwishes__block-desc">{props.item.holiday}</p>
                </div>
            </div>
            <div className="userwishes__block-act">
                <span className="userwishes__block-fav"><img src={Star} alt=""/></span>
            </div>
        </div>
    );
}

export default UserWishesBlock;