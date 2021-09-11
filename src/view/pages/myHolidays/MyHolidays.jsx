import React, {useEffect, useState} from 'react';
import './myHolidays.scss'
import SidePanel from "../../components/sidePanel/SidePanel";
import Plus from "../../../assets/img/plus.svg";
import Sad from '../../../assets/img/sad.svg'
import MyHolidaysBlock from "../../components/myHolidaysBlock/MyHolidaysBlock";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Dagger from "../../../assets/img/minidagger.svg";
import API from "../../../api/index"
import Wholes from "../../../assets/gif/loading wholes.gif"

function MyHolidays() {
    const [pending, setPending] = useState(true)
    const [holidays, setHolidays] = useState([])
    const [name, setName] = useState("")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("Месяц")
    const [error, setError] = useState("")
    useEffect(() => {
        API.getMyHolidays()
            .finally(() => setPending(false))
            .then((res) => {
                setHolidays(res.data)
            })

    }, [])
    const deleteHoliday = (id) => {
        setHolidays(holidays.filter((item) => item.id !== id))
    }
    const editHoliday = (id, data) => {
        setHolidays(holidays.map((item) => item.id === id ? data : item))
    }
    const ucFirst = (string) => {
        if (!string) return string;
        return string
            .toLowerCase()
            .split(' ')
            .map(function (word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
    }
    const submit = (e) => {
        e.preventDefault()
        if(error == "*Все поля обязательны"){
            handleClose()
        }
        const holiday = {
            name: ucFirst(name),
            day,
            month,
        }
        API.createHoliday(holiday)
            .then((res) => {
                setHolidays([...holidays, res.data])
                if(res.status === 201){
                    setError("")
                }
            })
            .catch((err) => {
                if (err) {
                    setError("*Все поля обязательны")
                }
            })
        setName("")
        setDay("")
        setMonth("Месяц")
    }

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
            width: 426,
            height: 433,
        },
        container: {
            width: 300,
            margin: "0px auto",
        },
        input: {
            marginTop: 5,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
            width: "100%",
            height: 50,
            border: "1px solid #F0F0F0",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "22px",
            padding: "10px 5px",
            cursor: "text",
            fontFamily: "Montserrat",
            marginBottom: 49,
        },
        h3: {
            marginTop: 20,
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "#1A1A1A",
        },
        buttons: {
            marginTop: 26,
            textAlign: "center",
        },
        cancel_btn: {
            color: "#FBFBFB",
            background: "var(--color-theme)",
            borderRadius: 10,
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "22px",
            padding: "14px 8px",
            cursor: "pointer",
            fontFamily: "Montserrat",
        },
        dagger: {
            textAlign: "right",
            marginBottom: 7,
            cursor: "pointer",
        },
        mini_inputs: {
            display: "flex",
            justifyContent: "space-between",

        },
        mini_input: {
            height: 50,
            width: 140,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
            padding: "30px 5px",
            fontFamily: "Montserrat",
            border: "none",
            outline: "none",
        },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setMonth("Месяц")
    };

    if (pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>
    return (
        <div className="wrapper">
            <SidePanel/>
            <div className="myholidays">
                <h1 className="myholidays__title">Ваши праздники</h1>
                <div>
                    <button type="button" onClick={handleOpen} className="myholidays__btn"><span><img src={Plus}
                                                                                                      alt=""/></span>Добавь
                        праздник
                    </button>
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
                                <p onClick={handleClose} className={classes.dagger}><img src={Dagger} alt=""/></p>
                                <div className={classes.container}>
                                    <p className="error">{error}</p>
                                    <form onSubmit={submit}>
                                        <h3 className={classes.h3}>Название праздника</h3>
                                        <input value={name} onChange={(e) => setName(e.target.value)}
                                               className={classes.input} type="text"/>
                                        <div className={classes.mini_inputs}>
                                            <input value={day} onChange={(e) => setDay(e.target.value)}
                                                   className={classes.mini_input} placeholder="День" type="number"/>
                                            {/*<input value={month} onChange={(e) => setMonth(e.target.value)}*/}
                                            {/*       className={classes.mini_input} placeholder="Месяц" type="text"/>*/}
                                            <select value={month} onChange={(e) => setMonth(e.target.value)}
                                                    className="myholidays__mini-input">
                                                <option disabled selected value={month}>{month}</option>
                                                <option value="января">января</option>
                                                <option value="февраля">февраля</option>
                                                <option value="марта">марта</option>
                                                <option value="апреля">апреля</option>
                                                <option value="мая">мая</option>
                                                <option value="июня">июня</option>
                                                <option value="июля">июля</option>
                                                <option value="августа">августа</option>
                                                <option value="сентября">сентября</option>
                                                <option value="октября">октября</option>
                                                <option value="ноября">ноября</option>
                                                <option value="декабря">декабря</option>
                                            </select>
                                        </div>
                                        <div className={classes.buttons}>
                                            <button type="submit"
                                                    className={classes.cancel_btn}>Сохранить
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </Modal>
                </div>
                {
                    holidays.length === 0 ?
                        <div className="myholidays__empty">
                            <span><img src={Sad} alt=""/></span>
                            <b>У вас нет праздников</b>
                            <p>Вы несчастны? <br/>Добавьте хотя бы свой День Рождения!</p>
                        </div>
                        : <div className="myholidays__blocks">
                            {holidays.map((item) => <MyHolidaysBlock
                                holidays={holidays}
                                key={item.id}
                                editHoliday={editHoliday}
                                deleteHoliday={deleteHoliday}
                                item={item}/>)}
                        </div>
                }
            </div>
        </div>
    );
}

export default MyHolidays;