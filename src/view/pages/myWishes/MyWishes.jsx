import React, {useEffect, useState} from "react";
import "./myWishes.scss";
import SidePanel from "../../components/sidePanel/SidePanel";
import Plus from "../../../assets/img/plus.svg";
import MyWishesBlock from "../../components/myWishesBlock/MyWishesBlock";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Part1 from '../../../assets/img/part1.svg'
import Part2 from '../../../assets/img/part2.svg'
import API from "../../../api";
import Wholes from "../../../assets/gif/loading wholes.gif";
import Nice from "../../../assets/img/nice.svg"

function MyWishes() {
    const [pending, setPending] = useState(true)
    const [wishes, setWishes] = useState([])
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [holiday, setHoliday] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {
        API.getMyWishes()
            .finally(() => setPending(false))
            .then((res) => {
                setWishes(res.data)
            })
    }, [])
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
            height: 629,
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
        },
        h3: {
            marginTop: 20,
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "#1A1A1A",
        },
        h2: {
            marginTop: 20,
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "#1A1A1A",
            textAlign: "center"
        },
        img: {
            textAlign: "center",
            position: "relative",
            cursor: "pointer",
        },
        plus: {
            position: "absolute",
            top: "32%",
            left: "46%",
        },
        buttons: {
            display: "flex",
            marginTop: 26,
            justifyContent: "space-between",
        },
        del_btn: {
            border: "1px solid var(--color-theme)",
            borderRadius: 10,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "20px",
            color: "#1A1A1A",
            padding: "15px 16px",
            cursor: "pointer",
            fontFamily: "Montserrat",
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
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const submit = (e) => {
        e.preventDefault()
        if (error == "*Это поле обязательно") {
            handleClose()
        }
        const data = {
            name,
            description,
            link,
            holiday: {
                name: holiday,
                day,
                month,
            },
        }
        API.createWish(data)
            .then((res) => {
                setWishes([...wishes, res.data])
                if (res.status === 201) {
                    setError("")
                }
            })
            .catch((err) => {
                if (err) {
                    setError("*Это поле обязательно")
                }
            })
        setName("")
        setLink("")
        setDescription("")
        setHoliday("")
    }
    const deleteWish = (id) => {
        setWishes(wishes.filter((item) => item.id !== id))
    }
    const editWish = (id, data) => {
        setWishes(wishes.map((item) => item.id === id ? data : item))
    }

    if (pending) return <div className="loading"><span className="inloading"><img src={Wholes} alt=""/></span></div>
    return (
        <div className="wrapper">
            <SidePanel/>
            <div className="mywishes">
                <h1 className="mywishes__title">Мой список желаний</h1>
                <div className="mywishes__btn-div">
                    <button type="button" onClick={handleOpen} className="mywishes__btn">
            <span>
              <img src={Plus} alt=""/>
            </span>
                        Добавь подарок
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
                                <div className={classes.container}>
                                    <form onSubmit={submit}>
                                        <h3 className={classes.h3}>Название подарка</h3>
                                        <p className="error">{error}</p>
                                        <input value={name} onChange={(e) => setName(e.target.value)}
                                               className={classes.input} type="text"/>
                                        <h3 className={classes.h3}>Описание подарка</h3>
                                        <input value={description} onChange={(e) => setDescription(e.target.value)}
                                               className={classes.input} type="text"/>
                                        <h3 className={classes.h3}>Праздник</h3>
                                        <input value={holiday} onChange={(e) => setHoliday(e.target.value)}
                                               className={classes.input} type="text"/>
                                        <h3 className={classes.h3}>Ссылка</h3>
                                        <input value={link} onChange={(e) => setLink(e.target.value)}
                                               className={classes.input} type="text"/>
                                        <h2 className={classes.h2}>Фото</h2>
                                        <div className={classes.img}><img src={Part1} alt=""/><img
                                            className={classes.plus} src={Part2} alt=""/></div>
                                        <div className={classes.buttons}>
                                            <p>
                                                <button onClick={handleClose} className={classes.del_btn}>Назад</button>
                                            </p>
                                            <p>
                                                <button type="submit" className={classes.cancel_btn}>Сохранить</button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </Modal>
                </div>
                <div className="mywishes__blocks">
                    {
                        wishes.length === 0 ?
                            <section className="mywishes__empty">
                                <span><img src={Nice} alt=""/></span>
                                <b>Пожеланий нет :(</b>
                                <p>Вы что не любите подарков?</p>
                            </section>
                            : wishes.map((item) => <MyWishesBlock
                                deleteWish={deleteWish}
                                editWish={editWish}
                                key={item.id}
                                item={item}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default MyWishes;
