import React from 'react';
import { useHistory } from "react-router";
import {
    Grid,
} from '@material-ui/core';

export default function Footer() {
    const history = useHistory();
    const onClick = () => {
        history.push('/home');
    };
    return (
        <Grid className="footer-border pt-40">
            <Grid className="home-body">
                <Grid className="flex-footer pb-40">
                    <Grid
                        className="footer-logo-w mouse-cursor"
                        onClick={onClick}
                    >
                        <img className="footer-logo footer-title-h desktop-show" src={require("../assets/img/pasts-reklama-logo.png")} alt="Footer Logo" />
                        <img className="footer-mobile-logo footer-title-h mobile-show" src={require("../assets/img/mobile-logo.png")} alt="Footer Logo" />
                    </Grid>
                    <Grid className="footer-items-w flex-footer txt-14 txt-600 txt-line-36 col-main-black">
                        <div>
                            <div className="footer-title-h footer-mobile-title txt-16 txt-700 txt-line-20">
                                Rekvizīti
                            </div>
                            <div>
                                SIA MRVLS
                            </div>
                            <div>
                                Reģistrācijas Nr.40203026076
                            </div>
                            <div>
                                PVN maksātāja Nr. LV40203026076
                            </div>
                            <div>
                                Ģertrūdes iela 66, Rīga, LV-1009
                            </div>
                        </div>
                        <div>
                            <div className="footer-title-h" />
                            <div>
                                Banka:  Luminor (DNB banka)
                            </div>
                            <div>
                                Kods: RIKOLV22
                            </div>
                            <div>
                                Konts: LV92RIKO0002930234007
                            </div>
                        </div>
                        <div>
                            <div className="footer-title-h footer-mobile-title txt-16 txt-700 txt-line-20">
                                Saziņai par reklāmas pakalpojumiem
                            </div>
                            <div>
                                <img src={require("../assets/img/phone.png")} className="header-icon" alt="phone icon" /> +371 29352642
                            </div>
                            <div>
                                <img src={require("../assets/img/email.png")} className="header-icon" alt="email icon" /> reklamapasta@mrvls.lv
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="footer-bottom">
                    <span className=" txt-13 txt-400 txt-line-28 col-main-black">
                        &copy; {new Date().getFullYear()}. All Rights Reserved
                    </span>
                </div>
            </Grid>
        </Grid>
    )
}