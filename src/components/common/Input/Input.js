import React from 'react';
import { View, TextInput } from 'react-native';
// import { Input as Input2 } from 'nachos-ui';




// <View style={styles.containerStyle}>
// </View>
// style={styles.inputStyle}
// 


// propTypes
// style={inputStyle}



const Input = ({ value, onChange }) => {
    return (
        <TextInput
            placeholder='Your name'
            value={value}
            style={styles.inputStyle}
            onChangeText={onChange}
        />

    );
}

const styles = {
    inputStyle: {
        color: '#000',
        padding: 10,
        fontSize: 18,
        // lineHeight: 23,
        // flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;
