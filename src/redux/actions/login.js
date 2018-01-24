// @flow

import {LOGOUT, SET_CURRENT_USER } from './types';
import userFetch from '../../api/user';

type Action = {type: string, payload: Object}
type PromiseAction = Promise<Action>;
// eslint-disable-next-line
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any
type ThunkAction = (dispatch: Dispatch) => any;


interface userLog {
    id: number,
    name: string
}

export function logout() : Action {
    return {
        type: LOGOUT,
        payload: {}
    }
}

export function loginRequest(username : string, psw: string) : Promise {
    return userFetch(username, psw)
    .then( (userData : userLog) => {

        return new Promise( (resolve) => {

            if(userData.error){
                resolve({success: false, error: userData.error});
            }else{
                resolve({success: true, error: null, user: userData});
            }

        })

    })
}

export function setCurrentUser(user: userLog): Action{
    localStorage.setItem('loginId', user.id );
    localStorage.setItem('loginName', user.name );
    return {
        type: SET_CURRENT_USER,
        payload: {
            user: user
        }
    }
}