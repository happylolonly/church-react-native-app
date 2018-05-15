import React, { Component } from 'react';
import { View } from 'react-native';


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
                someLists: fakeArr.map(item => {{
                    title: `Title #${item}}`,
                    description: `Desc ${item}`
                }})
            })
        })
    }

    render() {
        <View>
            <Text>Awesome Lists Page!</Text>

            <Text>Secret data from fisrt screen {this.props.navitation.data}</Text>

            {this.state.someLists.map(item => {
                const { title, description } = item;

                return (
                    <View key={title}>
                        <Text>{title}</Text>
                        <Text>{description}</Text>
                    </View>
                )
            })}

           

        </View>
    }
}

export default ListContainer;
