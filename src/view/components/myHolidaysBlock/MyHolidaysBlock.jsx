import React from 'react';
import './myHolidaysBlock.scss'
import Dots from "../../../assets/img/dots3.svg";

function MyHolidaysBlock(prps) {
    return (
        <div className="myholidays__block">
            <div className="myholidays__block-texts">
                <div className="myholidays__block-date">23 февраля</div>
                <div className="myholidays__block-name">День защитника Отечества</div>
            </div>
            <span className="myholidays__block-dots"><img src={Dots} alt=""/></span>
        </div>
    );
}

export default MyHolidaysBlock;