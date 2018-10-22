import React from 'react';
import { TouchableHighlight, Text } from 'react-native';


const Button = ({ text, onPress }) => {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}
        >
            <Text
            style={styles.text}
            >
                {text}

            </Text>
        </TouchableHighlight>

    )
}

const styles = {
    button: {
        backgroundColor: 'orange',
        borderRadius: 4,
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#fff',
        padding: 10,
    }
}

export default Button;
