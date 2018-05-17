import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { Input } from '../../components/common';


const Welcome = ({ login, password, handleData, submit }) => {
    return (
        <View style={styles.container}>


            <Input
                value={login}
                onChange={(value) => handleData(value, 'login')}
            />

            <Input
                value={password}
                onChange={(value) => handleData(value, 'password')}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={submit}
            >
                <Text
                    style={styles.text}>
                    Sign in
                </Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = {
    button: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'transparent',
        backgroundColor: 'orange',
        // flex: 1,
        // alignSelf: 'stretch',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
        padding: 30,
        marginTop: 100,
    }
}

export default Welcome;
