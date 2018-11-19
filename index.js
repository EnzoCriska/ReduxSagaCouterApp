/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './src/App'
import CounterComponents from './src/components/counterComponents'

AppRegistry.registerComponent(appName, () => App);
