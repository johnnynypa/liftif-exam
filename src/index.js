// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { setCurrentUser } from './redux/actions/login';
import store from './redux/store';

//Validamos la session abierta al recargar
const user = {id: localStorage.getItem('loginId'), name: localStorage.getItem('loginName')};
if(user.id){
    store.dispatch(setCurrentUser(user));
    if(window.location.pathname === '/login'){
        window.location.replace('/');
    }
}


ReactDOM.render(App, document.getElementById('root'));
