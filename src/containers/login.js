//Dependencies
import React, {Component} from 'react';
import '../styles/loginPage.css';

import LoginForm from '../components/loginForm';


class Login extends Component{
    render(){
        return (
            <div className="loginPage">
                <LoginForm />
            </div>
        )
    }
}

export default Login;