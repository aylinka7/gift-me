import React from 'react';
import {Link} from "react-router-dom"
import './profileSettings.scss'
import Edit from '../../../assets/img/edit1.svg'

import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        right: 0,
        border: "none",
        outline: "none",
        width: 385,
        backgroundColor: "white",
        height: "100vh",
        padding: 30,
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export function ProfileSettings(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
            <form className="profile">
                <p className="profile__text">Имя </p>
                {
                    props.nameIsEdit ?
                        <input
                            autoFocus
                            value={props.name}
                            onChange={(e) => props.setName(e.target.value)}
                            type="text" className="profile__input"/> :
                        <div className="profile__input">{props.name}<p className="profile__edit"><img src={Edit}
                                                                                                      alt=""/></p></div>
                }
                <p className="profile__text">Фамилия</p>
                <div className="profile__input">{props.surname}<p className="profile__edit"><img src={Edit} alt=""/></p>
                </div>
                <p className="profile__text">День рождения</p>
                <div className="profile__birthday">
                    <p className="profile__birthday-item"></p>
                    <p className="profile__birthday-item"></p>
                    <p className="profile__birthday-item"></p>
                </div>
                <p className="profile__text">О себе</p>
                <textarea name="" id="" cols="30" rows="10" className="profile__about"></textarea>
                <p className="profile__symbols">140 символов</p>
                <p className="profile__text">Facebook</p>
                <div className="profile__input"><p className="profile__edit"><img src={Edit} alt=""/></p></div>
                <p className="profile__text">Instagram</p>
                <div className="profile__input"><p className="profile__edit"><img src={Edit} alt=""/></p></div>
                <div className="profile__images">
                    <label className="profile__ava">
                        <input onChange={props.handleAvaChange} className="profile__none" type="file"/>
                        <p className="profile__text cur">Изменить фото профиля <span><img src={Edit} alt=""/></span></p>
                    </label>
                    <label className="profile__bg">
                        <input onChange={props.handleBgChange} className="profile__none" type="file"/>
                        <p className="profile__text cur">Изменить фото обложки <span><img src={Edit} alt=""/></span></p>
                    </label>
                </div>
                <div className="profile__buttons">
                    <Link to="/dashboard">
                        <div className="profile__btn profile__btn-none">Выйти</div>
                    </Link>
                    <button type="submit" className="profile__btn">Сохранить</button>
                </div>
                <div className="profile__changes">
                    <p className="profile__password">Изменить пароль</p>
                    <div>
                        <p onClick={handleOpen} className="profile__delete">Удалить аккаунт</p>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        ></Modal>
                    </div>
                </div>
            </form>
    );
}

