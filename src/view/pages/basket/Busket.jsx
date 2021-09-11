import React from 'react';
import './busket.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import BusketBlock from "../../components/busketBlock/BusketBlock";

function Busket() {
    return (
        <div className="wrapper">
            <SidePanel/>
            <div className="busket">
                <h1 className="busket__title">Корзина</h1>
                <div className="busket__blocks">
                    <BusketBlock/>
                    <BusketBlock/>
                    <BusketBlock/>
                </div>
            </div>
        </div>
    );
}

export default Busket;