import React, {useEffect, useState} from "react";
import "./userWishes.scss";
import API from "../../../api";
import Wholes from "../../../assets/gif/loading wholes.gif";
import Nice from "../../../assets/img/nice.svg"
import UserSidePanel from "../../components/userSidePanel/UserSidePanel";
import {useParams} from "react-router-dom"
import UserWishesBlock from "../../components/userWishesBlock/UserWishesBlock";

function UserWishes() {
    const [pending, setPending] = useState(true)
    const [wishes, setWishes] = useState([])
    const params = useParams()
    useEffect(() => {
        API.getUser(params.id)
            .finally(() => setPending(false))
            .then((res) => {
                const data = res.data.wishes
                setWishes(data)
            })
    }, [])

    if (pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>
    return (
        <div className="wrapper">
            <UserSidePanel item={params}/>
            <div className="userwishes">
                <h1 className="userwishes__title">Список желаний</h1>
                <div className="userwishes__btn-div">
                </div>
                <div className="userwishes__blocks">
                    {
                        wishes.length === 0 ?
                            <section className="userwishes__empty">
                                <span><img src={Nice} alt=""/></span>
                                <b>Пожеланий нет :(</b>
                                <p>Это грустный человек,<br/> но мне кажется он любит шоколад)</p>
                            </section>
                            :
                            wishes.map((item) => <UserWishesBlock
                                key={item.id}
                                item={item}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default UserWishes;
