const React = require('react');
import ReactNative, { AppRegistry, Text } from 'react-native';

import App from './app';

// register the app
AppRegistry.registerComponent('RNWeb', () => App);

AppRegistry.runApplication('RNWeb', {
  initialProps: {},
  rootTag: document.getElementById('root')
});