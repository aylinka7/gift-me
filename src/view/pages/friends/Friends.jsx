import React from 'react';
import './friends.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Loupe from '../../../assets/img/loupe.svg'
import Dagger from '../../../assets/img/dagger.svg'
import FriendsBlock from "../../components/friendsBlock/FriendsBlock";

function Friends() {
    return (
        <div className="wrapper">
            <SidePanel />
            <section className="friends">
                <div className="friends__search">
                    <input type="text"/>
                    <img src={Loupe} alt="" className="friends__loupe"/>
                    <img src={Dagger} alt="" className="friends__dagger"/>
                </div>
                <h2 className="friends__title">Друзья</h2>
                <div className="friends__blocks">
                    <FriendsBlock />
                    <FriendsBlock />
                    <FriendsBlock />

                </div>
            </section>
        </div>
    );
}

export default Friends;