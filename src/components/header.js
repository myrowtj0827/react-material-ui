import React from 'react';
import {
    Button,
    Menu,
    MenuItem,
    Fade,
    Grid,
} from '@material-ui/core';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    return (
        <Grid className="flex-space">
            <Grid>
                <img src={require('../assets/img/pasts-reklama-logo.png')} className="logo-img" alt="logo" />
            </Grid>
            <Grid className="flex-space txt-14 txt-600 txt-line-24">
                <Grid className="pr-34">
                    <img src={require("../assets/img/phone.png")} className="header-icon" alt="phone icon" />
                    <span> +371 29352642</span>
                </Grid>
                <Grid className="pr-50">
                    <img src={require("../assets/img/email.png")} className="header-icon" alt="email icon" />
                    <span> reklamapasta@mrvls.lv</span>
                </Grid>
                <Grid className="txt-700">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <span>LV </span>
                        <img src={require("../assets/img/icon-drop-down.png")} className="header-down-icon mouse-cursor" alt="phone icon" />
                    </Button>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        TransitionComponent={Fade}
                        onClose={handleClose}
                        disableScrollLock={ true }
                    >
                        <MenuItem onClick={handleClose}>LV</MenuItem>
                        <MenuItem onClick={handleClose}>EN</MenuItem>
                        <MenuItem onClick={handleClose}>RU</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Grid>
    )
}