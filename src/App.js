import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  initialRouteName: 'Home',
});
export default createAppContainer(AppNavigator);
