// @flow
// Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import InputFloatingLabel from './inputFloatingLabel';
import { loginRequest, setCurrentUser } from '../redux/actions/login';
import '../styles/loginForm.css';


type Props = {
    setCurrentUser: Function
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
        const self: any = this;
        self.onChange = this.onChange.bind(this);
        self.onSubmit = this.onSubmit.bind(this);
    }

    
    onChange(e:any){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e:any){
        e.preventDefault();
        loginRequest(this.state.username, this.state.password)
        .then( ({success, error, user} )=> {
            if(success){
                this.props.setCurrentUser(user);
                this.context.router.history.push('/');
            }
        })
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

LoginForm.contextTypes = {
    router : PropTypes.object.isRequired
}

export default connect(null, {setCurrentUser})(LoginForm);