import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


class Welcome extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(value, name) {
        this.setState({[name]: value});
    }

    handleClick() {
        console.log('dsklsdksdl');

    }

    render() {
        const { login, password } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Church friends cool app</Text>

                <Input
                    value={login}
                    name="login"
                    onChange={this.handleChange}
                />

                <Input
                    value={password}
                    name="password"
                    onChange={this.handleChange}
                />

                <Button
                    text="Sing in"
                    onPress={this.handleClick}
                />

            </View>
        )
    }
}


const styles = {
    container: {
        marginTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
    }
}


export default Welcome;
