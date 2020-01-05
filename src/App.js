import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import AddReservationScreen from './screens/AddReservation';
import LoginScreen from './screens/Login';
import VoiceToTextScreen from './screens/VoiceToText';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        AddReservation: AddReservationScreen,
        // ListReservation: ListReservationScreen,
        Login: LoginScreen,
        VoiceToText: VoiceToTextScreen,
    },
    { initialRouteName: 'Login' }
);
export default createAppContainer(AppNavigator);
