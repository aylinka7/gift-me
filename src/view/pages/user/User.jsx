import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import './user.scss'
import API from "../../../api/index"
import Wholes from "../../../assets/gif/loading wholes.gif";
import UserSidePanel from "../../components/userSidePanel/UserSidePanel";

function User(props) {
    const [user, setUser] = useState(null)
    const [pending, setPending] = useState(true)
    const params = useParams()
    useEffect(() => {
        API.getUser(params.id)
            .finally(() => setPending(false))
            .then((res) => {
                setUser(res.data)
            })
    }, [])

    if(pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>
    return (
        <div className="wrapper">
            <UserSidePanel item={params} />
            <div className="dashboard">
                <section className="dashboard__profile">
                    <div className="dashboard__profile-bg"><img src={props.bg} alt=""/></div>
                    <div className="dashboard__profile-ava"><img src={user?.photo} alt=""/></div>
                    <div className="dashboard__profile-name">{user?.first_name+" "+user?.last_name}</div>
                    <div className="dashboard__profile-email">{user?.email}</div>
                </section>
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
                <form><textarea value={user?.description} disabled className="dashboard__input" name="" id="" cols="80" rows="10"></textarea></form>
            </div>
        </div>
    );
}

export default User;