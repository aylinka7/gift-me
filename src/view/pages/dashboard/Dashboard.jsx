import React from 'react';
import './dashboard.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Gambol from '../../../assets/img/am worl of gam.jpg'
import Ava from '../../../assets/img/289811496009211.png'
import Settings from '../../../assets/img/settings.svg'

function Dashboard() {
    return (
        <div className="wrapper">
            <SidePanel />
            <div className="dashboard">
                <section className="dashboard__profile">
                    <div className="dashboard__profile-bg"><img src={Gambol} alt=""/></div>
                    <div className="dashboard__profile-ava"><img src={Gambol} alt=""/></div>
                    <div className="dashboard__profile-name">Kurmanova Aigerim</div>
                    <div className="dashboard__profile-email">Kurmanova21@mail.ru</div>
                </section>
                <div className="dashboard__profile-settings"><span><img src={Settings} alt=""/></span>Редактировать профиль</div>
                <section className="dashboard__blocks">
                    <div className="dashboard__block">
                        <h2 className="dashboard__block-number">123</h2>
                        <h2>ДРУЗЬЯ</h2>
                    </div>
                    <div className="dashboard__block  dashboard__block-green">
                        <h2 className="dashboard__block-number">123</h2>
                        <h2>ПОДАРИЛ(-a)</h2>
                    </div>
                    <div className="dashboard__block  dashboard__block-purple">
                        <h2 className="dashboard__block-number">123</h2>
                        <h2>ПОДАРЕНО</h2>
                    </div>
                </section>
                <form><textarea className="dashboard__input" name="" id="" cols="80" rows="10"></textarea></form>
            </div>
        </div>
    );
}

export default Dashboard;