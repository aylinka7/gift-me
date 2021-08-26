import React from 'react';
import './myWishesBlock.scss'
import Book from "../../../assets/img/book.svg";
import Star from "../../../assets/img/star (1).svg";
import Edit from "../../../assets/img/edit.svg";

function MyWishesBlock() {
    return (
        <div className="mywishes__block">
            <div className="mywishes__block-about">
                <span className="mywishes__block-img"><img src={Book} alt=""/></span>
                <div className="mywishes__block-texts">
                    <div className="mywishes__block-title">Книга</div>
                    <p className="mywishes__block-desc">Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today).....</p>
                    <a href="https://www.thingstogetme.com/177412af2132" className="mywishes__block-link">https://www.thingstogetme.com/177412af2132</a>
                    <p className="mywishes__block-desc">дата</p>
                </div>
            </div>
            <div className="mywishes__block-act">
                <span className="mywishes__block-fav"><img src={Star} alt=""/></span>
                <span className="mywishes__block-edit"><img src={Edit} alt=""/></span>
            </div>
        </div>
    );
}

export default MyWishesBlock;