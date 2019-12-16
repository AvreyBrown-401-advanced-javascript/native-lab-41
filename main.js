import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './home';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
//   Call: {screen: CallScreen},
});

const Nav = createAppContainer(MainNavigator);

export default Nav;