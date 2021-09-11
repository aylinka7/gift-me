import React, {useEffect, useState} from 'react';
import './userHolidays.scss';
import Sad from '../../../assets/img/sad.svg'
import API from "../../../api/index"
import Wholes from "../../../assets/gif/loading wholes.gif"
import {useParams} from "react-router-dom"
import UserSidePanel from "../../components/userSidePanel/UserSidePanel";
import UserHolidaysBlock from "../../components/userHolidaysBlock/UserHolidaysBlock";

function UserHolidays() {
    const [pending, setPending] = useState(true)
    const [holidays, setHolidays] = useState([])
    const params = useParams()
    useEffect(() => {
        API.getUser(params.id)
            .finally(() => setPending(false))
            .then((res) => {
                const data = res.data.holidays
                setHolidays(data)
            })

    }, [])

    if (pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>
    return (
        <div className="wrapper">
            <UserSidePanel item={params}/>
            <div className="userholidays">
                <h1 className="userholidays__title">Праздники</h1>
                {
                    holidays.length === 0 ?
                        <div className="userholidays__empty">
                            <span><img src={Sad} alt=""/></span>
                            <b>Здесь нет праздников</b>
                            <p>Вы в стране несчастных троллей(</p>
                        </div>
                        : <div className="userholidays__blocks">
                            {holidays.map((item) => <UserHolidaysBlock
                                holidays={holidays}
                                key={item.id}
                                item={item}/>)}
                        </div>
                }
            </div>
        </div>
    );
}

export default UserHolidays;