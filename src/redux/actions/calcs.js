import axios from "axios";
import {
    SHOW_SPINNING,
    GET_SELECT_PRODUCTION,
    MSG_ERROR,
    GET_PDF,
    MSG_INFO,
} from "./types";

import config from "./../../config/index";

const instance = axios.create({
    baseURL: config.SIM_API_URL,
    timeout: 30000,
});

export const reset = () => dispatch => {
    dispatch({
        type: GET_SELECT_PRODUCTION,
        payload: '',
    });
    dispatch({
        type: MSG_INFO,
        payload: '',
    })
};

/**
 * Getting the order price
 * @param data
 * @returns {function(...[*]=)}
 */
export const onGetCalc = (data) => dispatch => {
    dispatch({type: SHOW_SPINNING, payload: true});
    instance.post(config.SIM_API_URL + "/get-price", data)
        .then(res => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: GET_SELECT_PRODUCTION,
                payload: res.data,
            });
        })
        .catch(err => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: MSG_ERROR,
                payload: err && err.response && err.response.data,
            });
        })
};

/**
 * Sending the pdf download request
 */
export const onGetPdf = (data) => dispatch => {
    dispatch({type: SHOW_SPINNING, payload: true});
    instance.post(config.SIM_API_URL + "/get-pdf", data)
        .then(res => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: GET_PDF,
                payload: res.data,
            });
        })
        .catch(err => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: MSG_ERROR,
                payload: err && err.response && err.response.data,
            });
        })
};

/**
 * Sending Information
 */
export const onSendInfo = (data) => dispatch => {
    dispatch({type: SHOW_SPINNING, payload: true});
    instance.post(config.SIM_API_URL + "/send-info", data)
        .then(res => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: MSG_INFO,
                payload: res.data && res.data.result,
            });
        })
        .catch(err => {
            dispatch({type: SHOW_SPINNING, payload: false});
            dispatch({
                type: MSG_ERROR,
                payload: err && err.response && err.response.data,
            });
        })
};
