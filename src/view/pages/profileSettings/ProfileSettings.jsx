import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./profileSettings.scss";
import Edit from "../../../assets/img/edit1.svg";
import Dagger from "../../../assets/img/minidagger.svg";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import API from "../../../api/index"
import {useSelector} from "react-redux";



const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "none",
        outline: "none",
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 350,
        height: 300,
    },
    buttons: {
        display: "flex",
        marginTop: 30,
        justifyContent: "space-between",
    },
    input: {
        marginTop: 6,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
        width: "100%",
        height: 30,
        border: "1px solid #F0F0F0",
        fontSize: "11px",
        fontWeight: 400,
        lineHeight: "13px",
        padding: "5px",
        cursor: "text",
        fontFamily: "Montserrat",
    },
    container: {
        width: 260,
        margin: "30px auto",
    },
    dagger: {
        textAlign: "right",
        marginBottom: 14,
        cursor: "pointer",
    },
    dagger2: {
        textAlign: "right",
        marginBottom: 24,
        cursor: "pointer",
    },
    h2: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "15px",
        marginTop: 17,
    },
    del_btn: {
        border: "1px solid var(--color-theme)",
        borderRadius: 10,
        fontSize: "11px",
        fontWeight: 400,
        lineHeight: "13px",
        color: "#1A1A1A",
        padding: "9px 24px",
        cursor: "pointer",
        fontFamily: "Montserrat",
    },
    cancel_btn: {
        color: "#FBFBFB",
        background: "var(--color-theme)",
        borderRadius: 10,
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: "13px",
        padding: "9px 24px",
        cursor: "pointer",
        fontFamily: "Montserrat",
    },
}));
export function ProfileSettings(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const history = useHistory()
    const user = useSelector((state) => state.name.user);
    const [state, setState] = useState(user);
    const [day, setDay] = useState(props.birthDay)
    const [month, setMonth] = useState(props.birthMonth)
    const [year, setYear] = useState(props.birthYear)
    const [fileField, setFileField] = useState([])

    useEffect(() => setState(user), [user])
    useEffect(() => {
        setState({...state, birth_date: year + "-" + month + "-" + day})
    }, [day, month, year])

    const [newPassword, setNewPassword] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const changePassword = (e) => {
        e.preventDefault()
        const data = {
            new_password: newPassword,
            current_password: currentPassword,
        }
        API.changePassword(data)
        handleClose()
        setNewPassword("")
        setCurrentPassword("")
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(state)
        if(fileField.length) {
            let formData = new FormData(formElem);
            formData.append('photo', fileField[0])
            const id = JSON.parse(localStorage.getItem("user")).user_id
            API.createMyInfo(id, formData)
                .then((res) => {
                    props.setName(res.data.first_name)
                })
            history.push("/dashboard")
        }else{
            const id = JSON.parse(localStorage.getItem("user")).user_id
            API.createMyInfo(id, state)
            history.push("/dashboard")
        }
    }
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    let formElem = document.querySelector('#formElem')


    return (
        <form onSubmit={submit} id="formElem" className="profile">
            <p className="profile__text">Имя </p>
            <label className="profile_input">
                <input
                value={state?.first_name}
                onChange={handleChange}
                type="text"
                name="first_name"
                className="profile__input"
            /><p
                className="profile__edit">
                <img src={Edit} alt=""/>
            </p></label>
            <p className="profile__text">Фамилия</p>
            <label className="profile_input"><input
                value={state?.last_name}
                onChange={handleChange}
                type="text"
                name="last_name"
                className="profile__input"
            /><p className="profile__edit">
                <img src={Edit} alt=""/>
            </p></label>
            <p className="profile__text">День рождения</p>
            <div className="profile__birthday">
                <select value={day} onChange={(e) => setDay(e.target.value)}
                        className="profile__birthday-item">
                    <option disabled selected >{day}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select value={month} onChange={(e) => setMonth(e.target.value)} id="birth_month"
                        className="profile__birthday-item">
                    <option disabled selected value="">{
                        month === "01" ? "января" :
                        month === "02" ? "февраля" :
                        month === "03" ? "марта" :
                        month === "04" ? "апреля" :
                        month === "05" ? "мая" :
                        month === "06" ? "июня" :
                        month === "07" ? "июля" :
                        month === "08" ? "августа" :
                        month === "09" ? "сентября" :
                        month === "10" ? "октября" :
                        month === "11" ? "ноября" :
                        month === "12" ? "декабря" : ""
                    }</option>
                    <option value="01">января</option>
                    <option value="02">февраля</option>
                    <option value="03">марта</option>
                    <option value="04">апреля</option>
                    <option value="05">мая</option>
                    <option value="06">июня</option>
                    <option value="07">июля</option>
                    <option value="08">августа</option>
                    <option value="09">сентября</option>
                    <option value="10">октября</option>
                    <option value="11">ноября</option>
                    <option value="12">декабря</option>
                </select>
                <select value={year} onChange={(e) => setYear(e.target.value)}
                        className="profile__birthday-item">
                    <option disabled selected value="">{year}</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                </select>
            </div>
            <p className="profile__text">О себе</p>
            <textarea
                name=""
                value={state?.description}
                name="description"
                onChange={handleChange}
                id=""
                cols="30"
                rows="10"
                className="profile__about"
            />
            <p className="profile__symbols">140 символов</p>
            <p className="profile__text">Facebook</p>
            <label className="profile_input"><input
                value={state?.facebook_link}
                onChange={handleChange}
                type="text"
                name="facebook_link"
                className="profile__input"
                // ref={(input) => { this.textInput = input; }}
            /><p className="profile__edit">
                <img src={Edit} alt=""/>
            </p></label>
            <p className="profile__text">Instagram</p>
            <label className="profile_input"><input
                value={state?.instagram_link}
                name="instagram_link"
                onChange={handleChange}
                type="text"
                className="profile__input"
                // ref={(input) => { this.textInput = input; }}
            /><p className="profile__edit">
                <img src={Edit} alt=""/>
            </p></label>
            <div className="profile__images">
                <label className="profile__ava">
                    <input
                        // onChange={props.handleAvaChange}
                        onChange={(e) => {
                            setFileField(e.target.files)
                        }}
                        className="profile__none"
                        type="file"
                    />
                    <p className="profile__text cur">
                        Изменить фото профиля{" "}
                        <span>
              <img src={Edit} alt=""/>
            </span>
                    </p>
                </label>
                <label className="profile__bg">
                    <input
                        onChange={props.handleBgChange}
                        className="profile__none"
                        type="file"
                    />
                    <p className="profile__text cur">
                        Изменить фото обложки{" "}
                        <span>
              <img src={Edit} alt=""/>
            </span>
                    </p>
                </label>
            </div>
            <div className="profile__buttons">
                <Link to="/dashboard">
                    <div onClick    ={props.clear} className="profile__btn profile__btn-none">Выйти</div>
                </Link>
                <button type="submit" className="profile__btn">
                    Сохранить
                </button>
            </div>
            <div className="profile__changes">
                <div>
                    <p onClick={handleOpen} className="profile__password">Изменить пароль</p>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <div className={classes.container}>
                                    <p onClick={handleClose} className={classes.dagger}><img src={Dagger} alt=""/></p>
                                    <h2 className={classes.h2} id="transition-modal-title">Текущий пароль</h2>
                                    <form id="transition-modal-description">
                                        <input value={currentPassword}
                                               onChange={(e) => setCurrentPassword(e.target.value)}
                                               className={classes.input} type="text"/>
                                        <h2 className={classes.h2} id="transition-modal-title">Новый пароль</h2>
                                        <input className={classes.input}
                                               value={newPassword}
                                               onChange={(e) => setNewPassword(e.target.value)}
                                               type="text"/>
                                        <div className={classes.buttons}>
                                            <p>
                                                <button onClick={changePassword} type="submit"
                                                        className={classes.cancel_btn}>Изменить
                                                </button>
                                            </p>
                                            <p>
                                                <button type="button" onClick={handleClose}
                                                        className={classes.del_btn}>Отменить
                                                </button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </Modal>
                </div>
                <div>
                    <p type="button" onClick={handleOpen2} className="profile__delete">
                        Удалить аккаунт
                    </p>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open2}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open2}>
                            <div className={classes.paper}>
                                <div className={classes.container}>
                                    <p onClick={handleClose2} className={classes.dagger2}>
                                        <img src={Dagger} alt=""/>
                                    </p>
                                    <h2 className={classes.h2} id="transition-modal-title">
                                        Введите пароль
                                    </h2>
                                    <form id="transition-modal-description">
                                        <input className={classes.input} type="text"/>
                                        <div className={classes.buttons}>
                                            <p>
                                                <button className={classes.del_btn}>Удалить</button>
                                            </p>
                                            <p>
                                                <button
                                                    type="button"
                                                    onClick={handleClose}
                                                    className={classes.cancel_btn}
                                                >
                                                    Отменить
                                                </button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </form>
    );
}
