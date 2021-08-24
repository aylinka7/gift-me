import React from 'react';
import './footer.scss'
import Insta from '../../../assets/img/insta.svg'
import InstaNew from '../../../assets/img/insatnew.svg'
import  Facebook from '../../../assets/img/facebook.svg'
import  FacebookNew from '../../../assets/img/facebooknew.svg'
import  Telegram from '../../../assets/img/teelgram.svg'
import  Twitter from '../../../assets/img/twitter.svg'
import In from '../../../assets/img/in.svg'

function Footer() {
    return (
        <div className="footer__wrapper">
            <footer className="footer">
                <div className="footer__logo">gift&rarr;me</div>
                <div className="footer__main_item">О нас</div>
                <div className="footer__column">
                    <div className="footer__main_item">Контакты</div>
                    <div className="footer__item">+996 703 838 228</div>
                    <div className="footer__item">aidemday@gmail.com</div>
                </div>
                <div className="footer__column">
                    <div className="footer__main_item">Социальные сети</div>
                    <div className="footer__icons">
                        <div className="footer__icons_item"><img src={FacebookNew} alt=""/></div>
                        <div className="footer__icons_item"><img src={Twitter} alt=""/></div>
                        <div className="footer__icons_item"><img src={InstaNew} alt=""/></div>
                        <div className="footer__icons_item"><img src={In} alt=""/></div>
                    </div>
                </div>
            </footer>
            <div className="footer__copyright">Copyright © 2021 Gift me</div>
        </div>
        );
}

export default Footer;