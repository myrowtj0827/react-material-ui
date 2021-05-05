import React from 'react';
import {
    Button,
    Grid,
    InputLabel,
    FormControl,
    makeStyles,
    Modal,
    Fade,
    Backdrop,
    TextField,
    MenuItem,
    Select,
} from '@material-ui/core';

export default function Calculator() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: '21px 32px 40px',
        },
    }));
    const classes = useStyles();
    const [isSelect, setIsSelect] = React.useState(null);
    const [isSelectBtn, setIsSelectBtn] = React.useState(true);
    const [selected_value1, setSelectedValue1] = React.useState('1 Grupa');
    const [selected_value2, setSelectedValue2] = React.useState('15-25 sek');
    const [selected_value3, setSelectedValue3] = React.useState('2 nedēļās');

    const onSelect = (k) => {
        if (isSelect === k) {
            setIsSelect(null);
        } else {
            setIsSelect(Number(k));
        }
    };
    const onSelectBtn = () => {
        setIsSelectBtn(!isSelectBtn);
    };

    const items = [
        'Ekrāni pasta nodaļās', 'Kases sistēmu ekrāni', 'A2 plakāti', 'Bukleti / leafleti (svars līdz 50 gr.)',
        'Bukleti / leafleti (svars 51 gr. un vairāk)', 'Svārstekļa izvietojums kases zonā', 'Mazais stends'];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSelectValue = (type, e) => {
        if (type === 1)
            setSelectedValue1(e.target.value);
        else if (type === 2)
            setSelectedValue2(e.target.value);
        else
            setSelectedValue3(e.target.value)
    };



    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                minWidth: 150
            }
        },
        disableScrollLock: true
    };
    return (
        <>
            <section className="home-body">
                {/*  Production  */}
                <Grid container className="contents-center pt-92">
                    <Grid item className="calc-mobile" xs={5}>
                        <div className="calculator-body">
                            <div className="calculator-bg bg-set" />
                            <div className="calc-bottom-dot">
                                <img src={require("../assets/img/header-bg-left.svg")} className="bottom-img" alt=""/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="pl-64" xs={7}>
                        <Grid className="calculator-body">
                            <Grid className="txt-32 txt-800 txt-line-42 col-title calc-title-w">
                                Aprēķinu plānotajai reklāmas kampaņai
                            </Grid>

                            <Grid className="flex-grid4 pt-32 txt-14 txt-600 txt-line-20 col-main-black">
                                {
                                    items && items.map((item, keys) => {
                                        return (
                                            <div
                                                key={'calculator-' + keys}
                                                onClick={() => onSelect(keys + 1)}
                                                className={
                                                    isSelect && isSelect === Number(keys + 1) ?
                                                        "items-border img-title-position selected-item"
                                                        :
                                                        "items-border img-title-position"
                                                }>
                                                {item}
                                                {
                                                    isSelect && isSelect === Number(keys + 1) ?
                                                        <img className="circle-check-position" src={require("../assets/img/icon-circle-check.svg")} alt="circle check" />
                                                        :
                                                        null
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </Grid>

                            <Grid container className="flex-space pt-49 txt-14 txt-line-18">
                                <div className="txt-400 col-grey-black">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="selected_value1"
                                            value={selected_value1}
                                            onChange={(e) => onSelectValue(1, e)}
                                            MenuProps={MenuProps}
                                        >
                                            <MenuItem className="calc-select" value="0">
                                                <em>Select</em>
                                            </MenuItem>
                                            <MenuItem className="calc-select" value="1 Grupa">1 Grupa</MenuItem>
                                            <MenuItem className="calc-select" value="2 Grupa">2 Grupa</MenuItem>
                                            <MenuItem className="calc-select" value="3 Grupa">3 Grupa</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className="txt-400 col-grey-black">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-helper-label">Koeficients</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="selected_value2"
                                            value={selected_value2}
                                            onChange={(e) => onSelectValue(2, e)}
                                            MenuProps={MenuProps}
                                        >
                                            <MenuItem className="calc-select" value="0">
                                                <em>Select</em>
                                            </MenuItem>
                                            <MenuItem className="calc-select" value="15-25 sek">15-25 sek</MenuItem>
                                            <MenuItem className="calc-select" value="Kopā rotācijā">Kopā rotācijā</MenuItem>
                                            <MenuItem className="calc-select" value="EPS, AI">EPS, AI</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className="txt-400 col-grey-black">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-helper-label">Periodā</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="selected_value3"
                                            value={selected_value3}
                                            onChange={(e) => onSelectValue(3, e)}
                                            MenuProps={MenuProps}
                                        >
                                            <MenuItem className="calc-select" value="0">
                                                <em>Select</em>
                                            </MenuItem>
                                            <MenuItem className="calc-select" value='2 nedēļās'>2 nedēļās</MenuItem>
                                            <MenuItem className="calc-select" value='1 Grupa'>1 Grupa</MenuItem>
                                            <MenuItem className="calc-select" value='2 Grupa'>2 Grupa</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>

                            <Grid className="flex-space pt-48">
                                {
                                    isSelectBtn ?
                                        <Grid>
                                        <span className="warning txt-16 txt-700 txt-line-20 col-grey-black pr-16">
                                            Kopā:
                                        </span>
                                            <span className="txt-18 txt-800 txt-line-22 col-main-black">
                                            € 38.22
                                        </span>
                                        </Grid>
                                        :
                                        <Grid className="justify-left warning">
                                            <div className="txt-16 txt-700 txt-line-20 col-grey-black">
                                                <img className="warning-icon" src={require("../assets/img/warning.svg")} alt="warning" />
                                            </div>
                                            <div className="txt-14 txt-400 txt-line-18 col-main-black">
                                                <span>Price will be available after the selection</span>
                                            </div>
                                        </Grid>
                                }

                                <Grid>
                                    <Button
                                        className={
                                            isSelectBtn ?
                                                "txt-16 txt-line-27 txt-800 btn-bg-hover"
                                                :
                                                "txt-16 txt-line-27 txt-800 btn-bg-hover col-btn-grey-bg"
                                        }
                                        onClick={onSelectBtn}
                                    >
                                        <img className="plus-white-icon" src={require("../assets/img/icon-white-plus.svg")} alt="plus white icon" />
                                        <span>Pievienot reklāmas pozīciju</span>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            {
                !isSelectBtn ?
                    <section className="home-body">
                        <Grid container className="contents-center pt-70">
                            <Grid item xs={5} />
                            <Grid item className="pl-64" xs={7}>
                                <Grid className="txt-24 txt-800 txt-line-30 col-title">
                                    Your orders
                                </Grid>
                                <Grid className="pt-28 flex-mobile">
                                    <Grid className="order-grid">
                                        <Grid className="justify-order col-main-black pr-16">
                                            <img className="order-icon" src={require("../assets/img/vector-1.svg")} alt="icon block 1" />
                                            <div>
                                                <div className="txt-18 txt-600 txt-line-20">
                                                    <span>Ekrāni pasta nodaļās</span>
                                                </div>
                                                <div className="pt-12 txt-14 txt-400 txt-line-18">
                                                    <div>Grupa: 1 Grupa </div>
                                                    <div className="pt-7">Koeficient:  25-30 sek</div>
                                                    <div className="pt-7">Periodā:  4 nedēļās</div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid className="flex-column">
                                            <div className="txt-18 txt-line-24 txt-800 col-main-black align-r">
                                                €38.22
                                            </div>
                                            <div className="txt-16 txt-line-20 txt-700 col-btn-main-bg mouse-cursor">
                                                <Button className="btn-remove">Remove</Button>
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid className="order-grid mt-16">
                                        <Grid className="justify-order col-main-black pr-16">
                                            <img className="order-icon" src={require("../assets/img/vector-2.svg")} alt="icon block 1" />
                                            <div>
                                                <div className="txt-18 txt-600 txt-line-20">
                                                    Kases sistēmu ekrāni
                                                </div>
                                                <div className="pt-12 txt-14 txt-400 txt-line-18">
                                                    <div>Grupa: 1 Grupa </div>
                                                    <div className="pt-7">Koeficient:  25-30 sek</div>
                                                    <div className="pt-7">Periodā:  4 nedēļās</div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid className="flex-column">
                                            <div className="txt-18 txt-line-24 txt-800 col-main-black align-r">
                                                €24.70
                                            </div>
                                            <div className="txt-16 txt-line-20 txt-700 col-btn-main-bg mouse-cursor">
                                                <Button className="btn-remove">Remove</Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid className="pt-25 justify-end col-main-black">
                                    <div className="pr-20 txt-16 txt-700 txt-line-20">
                                        Subtotal (2 items):
                                    </div>
                                    <div className="txt-18 txt-800 txt-line-22">
                                        72.92 EUR
                                    </div>
                                </Grid>

                                <Grid className="pt-32 txt-16 txt-line-27 txt-800 justify-end btn-download">
                                    <Button
                                        className="btn-col"
                                        onClick={() => window.print("")}
                                    >
                                        Download PDF
                                    </Button>
                                    <Button
                                        className="btn-bg-color btn-border"
                                        onClick={handleOpen}
                                    >
                                        Veikt pasūtījumu
                                    </Button>

                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className="modal-body"
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                        disableScrollLock={ true }
                                    >
                                        <Fade in={open}>
                                            <div className={classes.paper}>
                                                <div
                                                    className="flex-end mouse-cursor"
                                                    onClick={handleClose}
                                                >
                                                    &times;
                                                </div>
                                                <div className="pt-7 txt-18 txt-800 txt-line-42 col-title">
                                                    Veikt pasūtījumu
                                                </div>
                                                <div className="pt-12 txt-16 txt-400 txt-line-24 col-grey-black">
                                                    Duis massa arcu ullamcorper habitasse integer faucibus fermentum sit quis.
                                                </div>

                                                <Grid className="btn-grid2">
                                                    <TextField
                                                        label="Name"
                                                        placeholder="Your name"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                    <TextField
                                                        label="Company"
                                                        placeholder="Company name"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                    <TextField
                                                        label="E-mail"
                                                        placeholder="Your e-mail"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                    <TextField
                                                        label="Phone"
                                                        placeholder="Your phone number"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </Grid>

                                                <div className="pt-32">
                                                    <Button
                                                        className="txt-16 txt-line-27 txt-800 btn-modal"
                                                        onClick={handleClose}
                                                    >
                                                        Pabeigt
                                                    </Button>
                                                </div>
                                            </div>
                                        </Fade>
                                    </Modal>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                    :
                    null
            }
        </>
    )
}