// @flow
// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/homePage.css';
import HomeForm from '../components/homeForm';

type Props = {
    login: {
        isLogin: boolean,
        id: number,
        name: string
    }
};
type State = {
    bar: number,
};


class Home extends Component<Props, State>  {

    componentWillMount() {
        if (!this.props.login.isLogin) {
            this.context.router.history.push('/login');
        }
    }

    render() {
        return (
            <div className="homePage">
                <div className="diagonal" id="diag1"></div>
                <div className="diagonal" id="diag2" />
                <div className="diagonal" id="diag3" />
                <div className="diagonal" id="diag4" />
                <div className="diagonal" id="diag5" />
                <div className="diagonal" id="diag6" />
                <div className="diagonal" id="diag7" />
                <div className="diagonal" id="diag8" />

                <div className="home-page-container" >
                    <HomeForm />
                </div>
            </div>
        )
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Home);