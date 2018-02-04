import * as types from './actionTypes';

export const apiRequest = () => {
    return {
        type: types.API_REQUEST
    };
};

export const apiOk = () => {
    return {
        type: types.API_OK
    };
};