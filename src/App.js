import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home';
import AddReservationScreen from './components/AddReservation';
// import ListReservationScreen from './components/ListReservations';
import LoginScreen from './components/Login';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AddReservation: AddReservationScreen,
    // ListReservation: ListReservationScreen,
    Login: LoginScreen,
  },
  {initialRouteName: 'Login'},
);
export default createAppContainer(AppNavigator);
