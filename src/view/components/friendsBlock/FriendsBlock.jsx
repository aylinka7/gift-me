import React from 'react';
import './friendsBlock.scss'
import Ava from "../../../assets/img/circle.svg";
import {Link} from "react-router-dom";

function FriendsBlock(props) {
    return (
        <div className="friends__block">
            <span className="friends__block-ava"><img src={Ava} alt=""/></span>
            <div className="friends__block-texts">
                <Link to={`user/${props.item.id}`}><h3 className="friends__block-name">{props.item.email}</h3></Link>
                <textarea disabled value={props.item.description} placeholder="Описание о себе" name="" id="" cols="22"
                          rows="2" className="friends__block-input"></textarea>
            </div>
        </div>
    );
}

export default FriendsBlock;