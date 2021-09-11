import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import './dashboard.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Settings from '../../../assets/img/settings.svg'
import API from '../../../api/index'
import Wholes from '../../../assets/gif/loading wholes.gif'
import {useDispatch, useSelector} from "react-redux";
import { setName5} from "../../../store/actions/actions";

function Dashboard(props) {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    dispatch(setName5(user))
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user")).user_id
        API.getUser(id)
            .finally(() => setPending(false))
            .then((res) => {
                setUser(res.data)
            })
    }, [])
    if(pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>

    return (
        <div className="wrapper">
            <SidePanel/>
            <div className="dashboard">
                <section className="dashboard__profile">
                    <div className="dashboard__profile-bg"><img src={props.bg} alt=""/></div>
                    <div className="dashboard__profile-ava"><img src={user?.photo} alt=""/></div>
                    <div className="dashboard__profile-name">{user?.first_name + " " + user?.last_name}</div>
                    <div className="dashboard__profile-email">{user?.email}</div>
                </section>
                <Link to="/profilesettings">
                    <div className="dashboard__profile-settings"><span><img src={Settings} alt=""/></span>Редактировать
                        профиль
                    </div>
                </Link>
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
                <form><textarea disabled className="dashboard__input" name="" id="" cols="80"
                                rows="10" value={user?.description}></textarea></form>
            </div>
        </div>
    );
}

export default Dashboard;