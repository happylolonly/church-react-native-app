import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'nachos-ui';

class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            someLists: [],
        };

    }

    componentDidMount() {

        const fakeArr = [1, 2, 3];

        setTimeout(() => {
            this.setState({
                someLists: fakeArr.map(item => {
                    return {
                        title: `Title #${item}`,
                        description: `Desc ${item}`
                    }
                })
            })
        })
    }


    render() {
        return (
            <View>
                <Text>Awesome Lists Page!</Text>

                <Text>Secret data from fisrt screen {this.props.navigation.getParam('someData')}</Text>

                {this.state.someLists.map(item => {
                    const { title, description } = item;

                    return (
                        <View key={title} style={styles.container}>
                            <Text style={styles.text}>{title}</Text>
                            <Text style={styles.text}>{description}</Text>
                        </View>
                    )
                })}

                <Button
                    onPress={() => this.props.navigation.navigate('Welcome')}
                >
                    Back
                </Button>

            </View>
        )
    }
}

const styles = {
    container: {
        borderWidth: 3,
        borderColor: 'red',
        marginTop: 10,
    },
    text: {
        textAlign: 'center'
    }
}

export default ListContainer;
