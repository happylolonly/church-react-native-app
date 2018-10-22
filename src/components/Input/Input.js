import React from 'react';
import { TextInput } from 'react-native';


const Input = ({ value, onChange, name }) => {

    return (
        <TextInput
            style={styles.input}
            value={value}
            onChange={(value) => onChange(value, name)}
        />



    )
}

const styles = {
    input: {
        padding: 10,
    },
    text: {
        
    },
    container: {

    },
};

export default Input;
