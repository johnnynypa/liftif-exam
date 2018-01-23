import {LOGOUT, SET_CURRENT_USER } from '../actions/types';

interface stateLogin {
    isLogin: boolean,
    id: number,
    name: string
}

interface action {
    type: string,
    payload: {
        user: {
            id: number,
            name: string
        }
    }
}

const initialState : stateLogin = {
    isLogin: false,
    id: null,
    name: ""
}

export default (state:stateLogin = initialState, action:action = {}) => {
    switch (action.type){
        case LOGOUT:
            return initialState;
        case SET_CURRENT_USER:
            return {
                isLogin: true,
                id: action.payload.user.id,
                name: action.payload.user.name
            }
        default:
            return state;
    }
}