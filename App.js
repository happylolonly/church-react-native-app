import WelcomePage from './src/screens/Welcome/WelcomeContainer';
import ListContainer from './src/screens/List/ListContainer';

import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Welcome: {
    screen: WelcomePage
  },
  Lists: {
    screen: ListContainer
  }
  
}, { 
  initialRouteName: 'Welcome',
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
