import React from 'react';
import { useHistory } from "react-router";
import {
    Button,
    Menu,
    MenuItem,
    Fade,
    Grid,
} from '@material-ui/core';

export default function Header() {
    const history = useHistory();
    const onClick = () => {
        history.push('/home');
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    return (
        <Grid className="flex-space">
            <Grid
                className="mouse-cursor"
                onClick={onClick}
            >
                <img src={require('../assets/img/pasts-reklama-logo.svg')} className="logo-img" alt="logo" />
            </Grid>
            <Grid className="flex-space txt-14 txt-600 txt-line-24">
                <Grid className="pr-34">
                    <img src={require("../assets/img/phone.svg")} className="header-icon" alt="phone icon" />
                    <span> +371 29352642</span>
                </Grid>
                <Grid className="pr-50">
                    <img src={require("../assets/img/email.svg")} className="header-icon" alt="email icon" />
                    <span> reklamapasta@mrvls.lv</span>
                </Grid>
                <Grid className="txt-700">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <span className="txt-14 txt-700 txt-line-24 col-main-black">LV </span>
                        <img src={require("../assets/img/icon-drop-down.svg")} className="header-down-icon mouse-cursor" alt="phone icon" />
                    </Button>
                    <Menu
                        id="fade-menu"
                        className="btn-header-drop"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        TransitionComponent={Fade}
                        onClose={handleClose}
                        disableScrollLock={ true }
                    >
                        <MenuItem onClick={handleClose}>
                            <span className="txt-14 txt-700 txt-line-24 col-main-black">LV</span></MenuItem>
                        <MenuItem onClick={handleClose}>
                            <span className="txt-14 txt-700 txt-line-24 col-main-black">
                                EN
                            </span>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <span className="txt-14 txt-700 txt-line-24 col-main-black">
                                RU
                            </span>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Grid>
    )
}