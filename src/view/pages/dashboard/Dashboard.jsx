import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import './dashboard.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Gambol from '../../../assets/img/am worl of gam.jpg'
import Ava from '../../../assets/img/289811496009211.png'
import Settings from '../../../assets/img/settings.svg'
import API from "../../../api/index"

function Dashboard(props) {
    const [user, setUser] = useState(null)
    const [pending, setPending] = useState(null)
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user")).user_id
        console.log(id)

        API.getUser(id)
            .then((res) => {
                setPending(false)
                setUser(res.data)
            })
    }, [])
    if(pending) return <h1>Загрузка...</h1>

    return (
        <div className="wrapper">
            <SidePanel />
            <div className="dashboard">
                <section className="dashboard__profile">
                    <div className="dashboard__profile-bg"><img src={props.bg} alt=""/></div>
                    <div className="dashboard__profile-ava"><img src={props.ava} alt=""/></div>
                    <div className="dashboard__profile-name">{props.name+" "+props.surname}</div>
                    <div className="dashboard__profile-email">Kurmanova21@mail.ru</div>
                </section>
                <Link to="/profilesettings"><div className="dashboard__profile-settings"><span><img src={Settings} alt=""/></span>Редактировать профиль</div></Link>
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