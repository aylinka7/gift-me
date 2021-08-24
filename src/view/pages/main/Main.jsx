import React from 'react';
import './main.scss'
import Pic1 from '../../../assets/img/pic1.svg'
import Pic2 from '../../../assets/img/pic2.svg'
import Pic3 from '../../../assets/img/pic3.svg'
import Notepad from '../../../assets/img/notepad.svg'
import Rocket from '../../../assets/img/rocket.svg'
import Present from '../../../assets/img/present.svg'
import Earth from '../../../assets/img/earth.svg'
import Macbook from '../../../assets/img/macbook.svg'

function Main() {
    return (
        <div className="main">
            <section className="main__about container">
                <div className="main__about_section">
                    <div className="main__about_text">
                        <div className="main__about_title">Gift me</div>
                        <div>Gift.me – это сайт, где пользователи могут размещать
                            свои желаемые подарки, даже указать ссылку на этот подарок.
                            Возможность делиться вещами.
                        </div>
                        <button className="main__about_btn">Создать WishList</button>
                    </div>
                    <div><img src={Pic1} alt=""/></div>
                </div>
                <div className="main__about_section">
                    <div className="main__about_img2"><img src={Pic2} alt=""/></div>
                    <div className="main__about_desc">Vestibulum augue tortor, condimentum et neque quis, bibendum
                        dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.
                    </div>
                </div>
                <div className="main__about_section">
                    <div className="main__about_desc">Vestibulum augue tortor, condimentum et neque quis, bibendum
                        dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.
                    </div>
                    <div className="main__about_img3"><img src={Pic3} alt=""/></div>
                </div>
            </section>
            <section className="main__icons">
                <div className="container main__icons_inner">
                    <div className="main__icons_block">
                        <img src={Notepad} alt=""/>
                        <div>Создавай</div>
                    </div>
                    <div className="main__icons_block">
                        <img className="main__icons_img2" src={Rocket} alt=""/>
                        <div>Делись</div>
                    </div>
                    <div className="main__icons_block">
                        <img className="main__icons_img3" src={Present} alt=""/>
                        <div>Получай</div>
                    </div>
                </div>
            </section>
            <section className="main__earth container">
                <div className="main__earth_desc">Хочешь в команду супер героев?! Дари крутые вещи из своего арсенала которыми ты уже не пользуешься  своим друзьям, тем самым уменьшив экологический след стань частью защитников природы :) </div>
                <div className="main__earth_img"><img src={Earth} alt=""/></div>
            </section>
            <div className="main__macbook"><img src={Macbook} alt=""/></div>
        </div>
    );
}

export default Main;