import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import {
    reset,
    onGetCalc,
    onGetPdf,
    onSendInfo,
} from "../redux/actions/calcs";
const config = require("../config/config");

function Calculator(props) {
    let { slug } = useParams();
    const history = useHistory();
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

    // const
    const classes = useStyles();
    const [isSelect, setIsSelect] = React.useState(slug ? config.ROUTER_SLUG.indexOf(slug) + 1 : null);
    const [selected_service, setSelectedService] = React.useState(1);
    const [selected_commercial, setSelectedCommercial] = React.useState(1);
    const [selected_period, setSelectedPeriod] = React.useState(1);
    const [selected_count, setSelectedCount] = React.useState(1);
    const [count_array, setCountArray] = React.useState(1);

    const [request_data, setRequestData] = React.useState(null);
    const [get_price, setGetPrice] = React.useState(null);
    const [total_price, setTotalPrice] = React.useState(0);
    const [get_list, setGetList] = React.useState([]);

    const { onGetCalc, onGetPdf, onSendInfo, reset, get_select_production, msg_info, get_pdf, spinning } = props;
    /**
     * Modal
     */
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState();
    const [company, setCompany] = React.useState();
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [errorArray, setErrorArray] = React.useState([]);

    useEffect(() => {
        if (msg_info) {
            if (msg_info) {
                toast("Thanks");
                setTimeout(() => {
                    reset();
                    setOpen(false);
                });
            } else {
                toast(msg_info.result);
            }
        }
    }, [msg_info, reset]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        let data;
        if (selected_period > 0) {
            if (isSelect === 2) {                      // in the case of type === "pos_screens"
                data = {
                    type: config.ROUTER_SLUG[isSelect - 1],
                    period: selected_period,
                }
            } else if (selected_count > 0) {
                if (isSelect !== 1) {
                    if (isSelect === 7) {             // in the case of type === "stand"
                        data = {
                            type: config.ROUTER_SLUG[isSelect - 1],
                            count: selected_count,
                            period: selected_period,
                        }
                    } else {                          // in the case of type === "posters, leaflets1, leaflets2, pendulum"
                        data = {
                            type: config.ROUTER_SLUG[isSelect - 1],
                            group: selected_service,
                            count: selected_count,
                            period: selected_period,
                        }
                    }
                } else if (selected_commercial > 0) {  // in the case of type === "screen"
                    data = {
                        type: config.ROUTER_SLUG[isSelect - 1],
                        group: selected_service,
                        count: selected_count,
                        length: selected_commercial,
                        period: selected_period,
                    }
                }
            }
            if (data) {
                setRequestData(data);
                onGetCalc(data);
            }
        }
        if (!data && !get_price) {
            setGetPrice(null);
        }
    }, [selected_service, isSelect, selected_period, selected_count, selected_commercial, get_price, onGetCalc]);

    useEffect(() => {
        if (get_select_production) {
            setGetPrice(get_select_production.price);
        }
    }, [get_select_production, get_list]);

    useEffect(() => {
        let count;
        let array = [];
        if (selected_service === 1)
            count = 13;
        else if (selected_service === 2)
            count = 28;
        else if (selected_service === 3)
            count = 191;
        else if (selected_service === 4)
            count = 154;
        for (let k = 1; k <= count; k ++) {
            array.push(k);
        }
        setCountArray(array);
        setSelectedCount(1);
    }, [selected_service, isSelect]);

    useEffect(() => {
        if (isSelect === 7) {
            let array = [];
            for (let k = 1; k <= 10; k ++) {
                array.push(k);
            }
            setCountArray(array);
        }
    }, [isSelect]);

    useEffect(() => {
        if (get_pdf) {
            if (navigator.userAgent && navigator.userAgent.includes('Firefox'))
                window.location = get_pdf.pdf;
            else
                window.open(get_pdf.pdf, '_blank');
        }
    }, [get_pdf]);

    useEffect(() => {
        if (errorArray.length > 0) {
            for (let k = 0; k < errorArray.length; k ++) {
                toast(errorArray[k]);
            }
            setErrorArray([]);
        }
    }, [errorArray]);

    const onOrderList = () => {
        if (get_price) {
            let list = get_list;
            let insert_data = request_data;
            insert_data.price = get_price;
            list.push(insert_data);
            setGetList(list);
            setTotalPrice(total_price + Number(get_price));
            // onInit();
        }
    };

    const onRemove = (k) => {
        let list = [...get_list];
        setTotalPrice(total_price - Number(list[k].price));
        list.splice(k, 1);
        setGetList(list);
    };

    const onDownloadPdf = () => {
        if (get_list && get_list.length > 0)
            onGetPdf(get_list);
    };

    const onInit = () => {
        setSelectedService(1);
        setSelectedCommercial(1);
        setSelectedPeriod(1);
        setSelectedCount(1);
        setCountArray(null);
        setGetPrice(null);
        setRequestData(null);
    };

    const onSelect = (k) => {
        if (isSelect !== k) {
            setIsSelect(Number(k));
            onInit();
            history.push('/calculator/' + config.ROUTER_SLUG[k - 1]);
        }
    };

    const handleOpen = () => {
        if (get_list && get_list.length > 0)
            setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSelectValue = (type, e) => {
        if (type === 1) {
            setSelectedService(e.target.value);
            setSelectedCount(1);
        }
        else if (type === 2)
            setSelectedCommercial(e.target.value);
        else if (type === 3)
            setSelectedPeriod(e.target.value);
        else if (type === 4)
            setSelectedCount(e.target.value);
    };

    const onTextChange = (e) => {
        if (e.target.id === "name")
            setName(e.target.value);
        else if (e.target.id === "company")
            setCompany(e.target.value);
        else if (e.target.id === "email")
            setEmail(e.target.value);
        else if (e.target.id === "phone")
            setPhone(e.target.value);
    };
    const onSendUserInfo = () => {
        let error = [];

        if (!name || (name && name.length < 2))
            error.push("The name must contain at least 2 symbols");

        if (!company || (company && company.length < 2))
            error.push("The company must contain at least 2 symbols");

        let flag_email = false;
        if (!email) {
            flag_email = true;
        } else if (!email.includes("@") || !email.includes("."))
            flag_email = true;
        if (flag_email)
            error.push("The email is not valid");

        let flag_phone = false;
        if (!phone) {
            flag_phone = true;
        } else {
            let re = /[0-9 +]/g;
            let found = phone.match(re);
            if (!found || phone.length !== found.length || phone.length < 8)
                flag_phone = true;
        }
        if (flag_phone)
            error.push("The phone number must contain at least 8 characters (numbers, space, +");

        if (error.length === 0) {
            const data = {
                name: name,
                company: company,
                email: email,
                phone: phone,
                order: get_list,
            };
            onSendInfo(data);
        } else {
            setErrorArray(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className={"spinning-curtain"} style={{display: spinning ? "flex" : "none"}}>
                <div className="lds-dual-ring"/>
            </div>

            <section className="home-body">
                {/*  Production  */}
                <Grid container className="contents-center pt-92">
                    <Grid item className="calc-mobile" xs={5}>
                        <div className="calculator-body">
                            <div className="calculator-bg bg-set" />
                            <div className="calc-bottom-dot">
                                <img src={require("../assets/img/header-bg-left.png")} className="bottom-img" alt=""/>
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
                                    config.REKLAMS_LIST && config.REKLAMS_LIST.map((item, keys) => {
                                        return (
                                            <div
                                                key={'calculator-' + keys}
                                                onClick={() => onSelect(keys + 1)}
                                                className={
                                                    isSelect && isSelect === Number(keys + 1) ?
                                                        "items-border img-title-position selected-item"
                                                        :
                                                        "items-border img-title-position"
                                                }
                                            >
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
                                {
                                    config.ROUTER_SLUG.indexOf(slug) !== 1 && config.ROUTER_SLUG.indexOf(slug) !== 6 && (
                                        <div className="txt-400 col-grey-black">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-helper-label-1">Place of service</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label-1"
                                                    id="selected_service"
                                                    value={selected_service}
                                                    onChange={(e) => onSelectValue(1, e)}
                                                    MenuProps={MenuProps}
                                                >
                                                    <MenuItem className="calc-select" value="0">
                                                        Select
                                                    </MenuItem>
                                                    {
                                                        config.ROUTER_SLUG.indexOf(slug) === 0 ?
                                                            config.GROUPS_SCREENS.map((item, key) => {
                                                                return (
                                                                    <MenuItem key={'group-' + key} className="calc-select" value={key + 1}>{item}</MenuItem>
                                                                )
                                                            })
                                                            :
                                                            config.GROUPS.map((item, key) => {
                                                                return (
                                                                    <MenuItem key={'group-' + key} className="calc-select" value={key + 1}>{item}</MenuItem>
                                                                )
                                                            })
                                                    }
                                                </Select>
                                            </FormControl>
                                        </div>
                                    )
                                }

                                {
                                    slug !== "pos_screens" && count_array && count_array.length > 0 &&
                                        <div className="txt-400 col-grey-black">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-helper-label-2">
                                                    {
                                                        slug === "screens" ?
                                                            "Screen count"
                                                            :
                                                            "Post office count"
                                                    }
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label-2"
                                                    id="selected_count"
                                                    value={selected_count}
                                                    onChange={(e) => onSelectValue(4, e)}
                                                    MenuProps={MenuProps}
                                                >
                                                    <MenuItem className="calc-select" value="0">
                                                        Select
                                                    </MenuItem>
                                                    {
                                                        count_array.map((item, key) => {
                                                            return (
                                                                <MenuItem key={'count-' + key} className="calc-select" value={key + 1}>{item}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                        </div>
                                }

                                {
                                    slug === "screens" && (
                                        <div className="txt-400 col-grey-black">
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-helper-label-3">Length of commercial</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label-3"
                                                    id="selected_commercial"
                                                    value={selected_commercial}
                                                    onChange={(e) => onSelectValue(2, e)}
                                                    MenuProps={MenuProps}
                                                >
                                                    <MenuItem className="calc-select" value="0">
                                                        Select
                                                    </MenuItem>
                                                    {
                                                        config.LENGTH_COMMERCIAL.map((item, key) => {
                                                            return (
                                                                <MenuItem key={'commercial-' + key} className="calc-select" value={key + 1}>{item}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                        </div>
                                    )
                                }

                                <div className="txt-400 col-grey-black">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-helper-label-4">Period</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label-4"
                                            id="selected_period"
                                            value={selected_period}
                                            onChange={(e) => onSelectValue(3, e)}
                                            MenuProps={MenuProps}
                                        >
                                            <MenuItem className="calc-select" value="0">
                                                Select
                                            </MenuItem>
                                            {
                                                config.PERIOD.map((item, key) => {
                                                    return (
                                                        <MenuItem key={'period-' + key} className="calc-select" value={key + 1}>{item}</MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>

                            <Grid className="flex-space pt-48">
                                {
                                    get_price ?
                                        <Grid>
                                        <span className="warning txt-16 txt-700 txt-line-20 col-grey-black pr-16">
                                            Kopā:
                                        </span>
                                            <span className="txt-18 txt-800 txt-line-22 col-main-black">
                                            € {get_price}
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
                                            get_price ?
                                                "txt-16 txt-line-27 txt-800 btn-bg-hover"
                                                :
                                                "txt-16 txt-line-27 txt-800 btn-bg-hover col-btn-grey-bg"
                                        }
                                        onClick={onOrderList}
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

            {/*  Order List  */}
            <section className="home-body">
                <Grid container className="contents-center pt-70">
                    <Grid item xs={5} />
                    <Grid item className="pl-64" xs={7}>
                        <Grid className="txt-24 txt-800 txt-line-30 col-title">
                            Your orders
                        </Grid>
                        <Grid className="pt-12 flex-mobile">
                            {
                                get_list && get_list.map((item, key) => {
                                    return (
                                        <Grid className="mt-16 order-grid" key={'order-' + key}>
                                            <Grid className="justify-order col-main-black pr-16">
                                                <img className="order-icon" src={require("../assets/img/vector-" + Number(config.ROUTER_SLUG.indexOf(item.type) + 1) + ".svg")} alt="icon block 1" />
                                                <div>
                                                    <div className="txt-18 txt-600 txt-line-20">
                                                        <span>
                                                            {config.REKLAMS_LIST[config.ROUTER_SLUG.indexOf(item.type)]}
                                                        </span>
                                                    </div>
                                                    <div className="pt-12 txt-14 txt-400 txt-line-18">
                                                        {
                                                            item.group && (
                                                                <div>
                                                                    Grupa:  {config.GROUPS[item.group - 1]}
                                                                </div>
                                                            )
                                                        }
                                                        {
                                                            item.length && (
                                                                <div className="pt-7">
                                                                    Koeficient:  {config.LENGTH_COMMERCIAL[item.length - 1]}
                                                                </div>
                                                            )
                                                        }
                                                        {
                                                            item.period && (
                                                                <div className="pt-7">
                                                                    Periodā:  {config.PERIOD[item.period - 1]}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid className="flex-column">
                                                <div className="txt-18 txt-line-24 txt-800 col-main-black align-r">
                                                    €{item.price}
                                                </div>
                                                <div className="txt-16 txt-line-20 txt-700 col-btn-main-bg mouse-cursor align-r">
                                                    <Button
                                                        className="btn-remove"
                                                        onClick={() => onRemove(key)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>

                        <Grid className="pt-25 justify-end col-main-black">
                            <div className="pr-20 txt-16 txt-700 txt-line-20">
                                {
                                    get_list && "Subtotal (" + get_list.length + " items):"
                                }
                            </div>
                            <div className="txt-18 txt-800 txt-line-22">
                                {total_price && total_price.toFixed(2)} EUR
                            </div>
                        </Grid>

                        <Grid className="pt-32 txt-16 txt-line-27 txt-800 justify-end btn-download">
                            <Button
                                className={
                                    get_list && get_list.length > 0 ?
                                        "btn-col"
                                        :
                                        "disable-bg btn-border"
                                }
                                onClick={onDownloadPdf}
                            >
                                Download PDF
                            </Button>
                            <Button
                                className={
                                    get_list && get_list.length > 0 ?
                                        "btn-bg-color btn-border"
                                        :
                                        "disable-bg btn-border"
                                }
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
                                                id="name"
                                                label="Name"
                                                value={name}
                                                placeholder="Your name"
                                                fullWidth
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={onTextChange}
                                            />
                                            <TextField
                                                id="company"
                                                label="Company"
                                                value={company}
                                                placeholder="Company name"
                                                fullWidth
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={onTextChange}
                                            />
                                            <TextField
                                                id="email"
                                                label="E-mail"
                                                value={email}
                                                placeholder="Your e-mail"
                                                fullWidth
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={onTextChange}
                                            />
                                            <TextField
                                                id="phone"
                                                label="Phone"
                                                value={phone}
                                                placeholder="Your phone number"
                                                fullWidth
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={onTextChange}
                                            />
                                        </Grid>

                                        <div className="pt-32">
                                            <Button
                                                className="txt-16 txt-line-27 txt-800 btn-modal"
                                                onClick={onSendUserInfo}
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
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        spinning: state.registers.spinning,
        get_select_production: state.registers.get_select_production,
        msg_error: state.registers.msg_error,
        get_pdf: state.registers.get_pdf,
        msg_info: state.registers.msg_info,
    }
};
export default connect(
    mapStateToProps,
    {
        reset,
        onGetCalc,
        onGetPdf,
        onSendInfo,
    }
)(Calculator)
