// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
            <div>
                Home
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