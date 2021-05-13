import {
    SHOW_SPINNING,
    GET_SELECT_PRODUCTION,
    MSG_ERROR,
    GET_PDF,
    MSG_INFO,
} from "../actions/types"

const initialState = {
    spinning: '',
    get_select_production: '',
    msg_error: '',
    get_pdf: '',
    msg_info: '',
};

export default function(state = initialState, action){
    switch(action.type){
        case SHOW_SPINNING:
            return {
                ...state,
                spinning: action.payload,
            };
        case GET_SELECT_PRODUCTION:
            return {
                ...state,
                get_select_production: action.payload,
            };
        case MSG_ERROR:
            return {
                ...state,
                msg_error: action.payload,
            };
        case GET_PDF:
            return {
                ...state,
                get_pdf: action.payload,
            };
        case MSG_INFO:
            return {
                ...state,
                msg_info: action.payload,
            };
        default:
            return state;
    }
}







