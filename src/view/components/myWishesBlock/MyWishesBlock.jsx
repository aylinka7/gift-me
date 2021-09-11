import React, {useState} from 'react';
import './myWishesBlock.scss'
import Book from "../../../assets/img/book.svg";
import Star from "../../../assets/img/star (1).svg";
import Edit from "../../../assets/img/edit.svg";
import {makeStyles} from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Dagger from "../../../assets/img/minidagger.svg";
import Modal from "@material-ui/core/Modal";
import API from "../../../api";
import Part1 from "../../../assets/img/part1.svg";
import Part2 from "../../../assets/img/part2.svg";

function MyWishesBlock(props) {
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            background: "#F7F6FF",
            border: "1px solid rgba(0, 0, 0, 0.3)",
            outline: "none",
            borderRadius: 10,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: 349,
            height: 100,
        },
        h2: {
            color: "#6860BC",
            fontWeight: 500,
            marginTop: 10,
            cursor: "pointer",
        },
        dagger: {
            textAlign: "right",
            marginBottom: "-23px",
            cursor: "pointer",
        },
        paper2: {
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
        h1: {
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
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const [name, setName] = useState(props.item.name)
    const [description, setDescription] = useState(props.item.description)
    const [link, setLink] = useState(props.item.link)
    const [holiday, setHoliday] = useState(props.item.holiday)

    const del = () => {
        API.deleteWish(props.item.id)
        props.deleteWish(props.item.id)
        handleClose()
    }
    const edit = () => {
        handleOpen2()
    }
    const save = (e) => {
        e.preventDefault();
        const data = {
            name,
            description,
            link,
        }
        API.editWish(props.item.id, data)
            .then((res) => {
                props.editWish(res.data.id, res.data)
            })
        handleClose()
    }

    return (
        <div className="mywishes__block">
            <div className="mywishes__block-about">
                <span className="mywishes__block-img"><img src={Book} alt=""/></span>
                <div className="mywishes__block-texts">
                    <div className="mywishes__block-title">{props.item.name}</div>
                    <p className="mywishes__block-desc">{props.item.description}</p>
                    <a href={props.item.link} className="mywishes__block-link">{props.item.link}</a>
                    <p className="mywishes__block-desc">{props.item.holiday}</p>
                </div>
            </div>
            <div className="mywishes__block-act">
                <span className="mywishes__block-fav"><img src={Star} alt=""/></span>
                <div className="mywishes__block-edit">
                    <span onClick={handleOpen}><img src={Edit} alt=""/></span>
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
                                <h2 onClick={del} className={classes.h2}>Удалить</h2>
                                <div>
                                    <h2 onClick={edit} className={classes.h2}>Изменить</h2>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={open2}
                                        onClose={handleClose2}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={open2}>
                                            <div className={classes.paper2}>
                                                <div className={classes.container}>
                                                    <form onSubmit={save}>
                                                        <h3 className={classes.h3}>Название подарка</h3>
                                                        <input value={name} onChange={(e) => setName(e.target.value)}
                                                               className={classes.input} type="text"/>
                                                        <h3 className={classes.h3}>Описание подарка</h3>
                                                        <input value={description}
                                                               onChange={(e) => setDescription(e.target.value)}
                                                               className={classes.input} type="text"/>
                                                        <h3 className={classes.h3}>Праздник</h3>
                                                        <input value={holiday}
                                                               onChange={(e) => setHoliday(e.target.value)}
                                                               className={classes.input} type="text"/>
                                                        <h3 className={classes.h3}>Ссылка</h3>
                                                        <input value={link} onChange={(e) => setLink(e.target.value)}
                                                               className={classes.input} type="text"/>
                                                        <h2 className={classes.h1}>Фото</h2>
                                                        <div className={classes.img}><img src={Part1} alt=""/><img
                                                            className={classes.plus} src={Part2} alt=""/></div>
                                                        <div className={classes.buttons}>
                                                            <p>
                                                                <button onClick={handleClose2}
                                                                        className={classes.del_btn}>&nbsp;&nbsp;&nbsp;Назад&nbsp;&nbsp;&nbsp;</button>
                                                            </p>
                                                            <p>
                                                                <button type="submit" onClick={handleClose2}
                                                                        className={classes.cancel_btn}>Изменить
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
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default MyWishesBlock;