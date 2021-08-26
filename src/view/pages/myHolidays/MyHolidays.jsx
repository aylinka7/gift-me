import React from 'react';
import './myHolidays.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Plus from "../../../assets/img/plus.svg";
import Dots from '../../../assets/img/dots3.svg'
import MyHolidaysBlock from "../../components/myHolidaysBlock/MyHolidaysBlock";

function MyHolidays() {
    return (
        <div className="wrapper">
            <SidePanel />
            <div className="myholidays">
                <h1 className="myholidays__title">Ваши праздники</h1>
                <button className="myholidays__btn"><span><img src={Plus} alt=""/></span>Добавь праздник</button>
                <div className="myholidays__blocks">
                    <MyHolidaysBlock />
                    <MyHolidaysBlock />
                    <MyHolidaysBlock />
                    <MyHolidaysBlock />
                </div>
            </div>
        </div>
    );
}

export default MyHolidays;