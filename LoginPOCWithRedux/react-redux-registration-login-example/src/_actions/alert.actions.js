import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    console.log("Inside success method of alert.action.js");
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    console.log("Inside error method of alert.action.js");
    return { type: alertConstants.ERROR, message };
}

function clear() {
    console.log("Inside clear method of alert.action.js");
    return { type: alertConstants.CLEAR };
}