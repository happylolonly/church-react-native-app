import React from 'react';
import { View } from 'react-native';

import { Input, Button } from '../../components/common';

const Welcome = ({ login, password, handleData, submit }) => {
    return (
        <View>
            
            <Input
                value={login}
                onChange={({ target: { value }}) => handleData(value, 'login')}
            />

            <Input
                value={password}
                onChange={({ target: { value }}) => handleData(value, 'password')}
            />

            <Button
                text="Sign in"
                onClick={submit}
            />

        </View>
    )
}

export default Welcome;
