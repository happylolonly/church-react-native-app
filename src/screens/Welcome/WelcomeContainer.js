import React, { Component } from 'react';
import { View } from 'react-native';

import Welcome from './Welcome';


class WelcomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(value, name) {
        this.setState({ [name]: value });
    }

    submit() {
        const { login, password } = this.state;

        setTimeout(() => {
            this.props.nava('/list', 'some data');
        }, 500);
    }

    render() {
        <View>

            <Welcome
                login={login}
                password={password}
                handleData={this.handleChange}
                submit={this.submit}
            />

        </View>
    }
}

export default WelcomeContainer;
