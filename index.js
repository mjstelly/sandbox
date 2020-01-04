import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// import Reactotron from 'reactotron-react-native';

// import './ReactotronConfig';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
AppRegistry.registerComponent(appName, () => App);
