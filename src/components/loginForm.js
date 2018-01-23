// @flow
// Dependencies
import React, {Component} from 'react';
import {bindActionCreators, Action } from 'redux';
import {connect} from 'react-redux';

import InputFloatingLabel from './inputFloatingLabel';
import { loginRequest } from '../redux/actions/login';
import '../styles/loginForm.css';

type Props = {
    loginRequest: Action
}

type State = {
    username: string,
    password: string
}

class LoginForm extends Component<Props, State>{

    constructor(props:Props){
        super(props);
        this.state={
            username : "",
            password : ""
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(e:any){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e:any){
        e.preventDefault();
    }

    render(){
        return(
            <div className="loginForm" >
                <div className="login-form-head" >
                    <h1>Iniciar Sesion</h1>
                </div>
                <form onSubmit={this.onSubmit}>
                    <InputFloatingLabel
                        placeholder="Nombre de usuario"
                        id="username-input"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    <InputFloatingLabel
                        placeholder="Contraseña"
                        id="password-input"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <input id="login-input-submit" type="submit" value="Iniciar" />
                </form>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return {
        loginRequest: bindActionCreators(loginRequest, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);