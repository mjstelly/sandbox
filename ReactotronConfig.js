import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(trackGlobalErrors())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;
