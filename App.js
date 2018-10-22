import React from 'react';
import { View } from 'react-native';
import Welcome from './src/screen/Welcome/Welcome';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Welcome />
      </View>
    );
  }
}


// export default createStackNavigator({
//   Welcome: {
//     screen: Welcome
//   },
// });
