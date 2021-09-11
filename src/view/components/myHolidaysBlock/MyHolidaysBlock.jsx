import React, {useState} from 'react';
import './myHolidaysBlock.scss'
import Dots from "../../../assets/img/dots3.svg";
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Dagger from "../../../assets/img/minidagger.svg";
import API from "../../../api/index"

function MyHolidaysBlock(props) {
    let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    const del = () => {
        API.deleteHoliday(props.item.id)
        props.deleteHoliday(props.item.id)
        handleClose()
    }

    const edit = () => {
        handleOpen2()
    }
    const save = (e) => {
        e.preventDefault();
        const data = {
            name,
            day,
            month,
        }
        API.editHoliday(props.item.id, data)
            .then((res) => {
                props.editHoliday(res.data.id, res.data)
            })
        handleClose()
    }

    const [name, setName] = useState(props.item.name)
    const [day, setDay] = useState(props.item.day)
    const [month, setMonth] = useState(props.item.month)

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
        paper2: {
            backgroundColor: theme.palette.background.paper,
            border: "none",
            outline: "none",
            borderRadius: 10,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: 426,
            height: 433,
        },
        h2: {
            color: "#6860BC",
            fontWeight: 500,
            marginTop: 10,
            cursor: "pointer",
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
        dagger2: {
            textAlign: "right",
            marginBottom: 7,
            cursor: "pointer",
        },
        dagger: {
            textAlign: "right",
            marginBottom: "-23px",
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

        }
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

    return (
        <div className="myholidays__block">
            <div className="myholidays__block-texts">
                <div className="myholidays__block-date"
                     style={{color: randomColor}}>{props.item.day + " " + props.item.month.toLowerCase()}</div>
                <div className="myholidays__block-name">{props.item.name}</div>
            </div>
            <div>
                <span onClick={handleOpen} className="myholidays__block-dots"><img src={Dots} alt=""/></span>
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
                                            <p onClick={handleClose} className={classes.dagger2}><img src={Dagger}
                                                                                                      alt=""/></p>
                                            <div className={classes.container}>
                                                <form onSubmit={save}>
                                                    <h3 className={classes.h3}>Название праздника</h3>
                                                    <input value={name} onChange={(e) => setName(e.target.value)}
                                                           className={classes.input} type="text"/>
                                                    <div className={classes.mini_inputs}>
                                                        <input value={day} onChange={(e) => setDay(e.target.value)}
                                                               className={classes.mini_input} placeholder="День"
                                                               type="number"/>
                                                        <input value={month} onChange={(e) => setMonth(e.target.value)}
                                                               className={classes.mini_input} placeholder="Месяц"
                                                               type="text"/>
                                                    </div>
                                                    <div className={classes.buttons}>
                                                        <button onClick={handleClose2} type="submit"
                                                                className={classes.cancel_btn}>Сохранить
                                                        </button>
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
    );
}

export default MyHolidaysBlock;