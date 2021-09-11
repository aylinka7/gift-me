import React, {useEffect, useState} from 'react';
import './friends.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Loupe from '../../../assets/img/loupe.svg'
import Dagger from '../../../assets/img/dagger.svg'
import FriendsBlock from "../../components/friendsBlock/FriendsBlock";
import API from "../../../api/index"
import Wholes from "../../../assets/gif/loading wholes.gif";

function Friends(props) {
    const [pending, setPending] = useState(true)
    const [input, setInput] = useState("")
    const [users, setUsers] = useState({
        list: [],
        filterList: []
    })
    useEffect(() => {
        API.getUsers()
            .finally(() => setPending(false))
            .then((res) => {
                if (props.isAuth != false) {
                    const arr = res.data
                    const newArr = arr.filter(item => item.id != JSON.parse(localStorage.getItem("user")).user_id)
                    setUsers((old) => ({
                        ...old,
                        list: newArr,
                    }))
                }
            })
    }, [])
    useEffect(() => {
        setUsers((old) => ({
            ...old,
            filterList: old.list,
        }))
    }, [users.list])
    const search = (value) => {
        let filterList = users.list.filter((item) => {
            return item.email.toLowerCase().includes(value.toLowerCase())
        })
        setUsers((old) => ({
            ...old,
            filterList
        }))
    }
    const clear = () => {
        search("")
        setInput("")
    }

    if (pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>
    return (
        <div className="wrapper">
            <SidePanel/>
            <section className="friends">
                <div className="friends__search">
                    <input onChange={(e) => {
                        setInput(e.target.value)
                        search(e.target.value)
                    }} placeholder="Поиск друзей" type="text" value={input}/>
                    <img src={Loupe} alt="" className="friends__loupe"/>
                    <img onClick={clear} src={Dagger} alt="" className="friends__dagger"/>
                </div>
                <h2 className="friends__title">Друзья</h2>
                <div className="friends__blocks">
                    {users.filterList.map((item) => <FriendsBlock key={item.id} item={item}/>)}
                </div>
            </section>
        </div>
    );
}

export default Friends;