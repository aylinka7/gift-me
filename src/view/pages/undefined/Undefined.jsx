import React from 'react';
import {Link} from "react-router-dom"
import './undefined.scss'
import Man from '../../../assets/img/404.svg'

function Undefined() {
    return (
        <div className="undefined container">
            <div className="undefined__texts">
                <h1 className="undefined__oops">Ой!</h1>
                <h2 className="undefined__page">ПЕЙДЖ НОТ ФАУНД</h2>
                <p className="undefined__error">Ошибка 404. Такая страница не существует либо она была удалена. </p>
                <Link to="/"><div className="undefined__btn">На главную</div></Link>
            </div>
            <div className="undefined__img"><img src={Man} alt=""/></div>
        </div>
    );
}

export default Undefined;