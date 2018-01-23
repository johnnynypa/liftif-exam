// @flow

import {LOGOUT, SET_CURRENT_USER } from './types';
import userFetch from '../../api/user';

type Action = {type: string, payload: Object}
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any

export function logout() : Action {
    return {
        type: LOGOUT,
        payload: {}
    }
}



export function loginRequest(username : string, psw: string){
    return (dispatch:Dispatch) => {
        return userFetch(username, psw)
        .then( userData => {
            dispatch(setCurrentUser(userData));
            return {success: true, error: null};
        })
        .catch( (error: string) => {
            return {success: false, error: error}
        } )
    }
}

export function setCurrentUser(user: {id: number, name: string}): Action{
    return {
        type: SET_CURRENT_USER,
        payload: {
            user: user
        }
    }
}