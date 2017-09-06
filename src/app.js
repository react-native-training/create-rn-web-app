import React from 'react';

import { View, Text, Image } from 'react-native';

const App = () => (
  <View style={{ marginTop: 50 }}>
    <Text>Welcome to React Native Web</Text>
    <Image
      style={{ width: 500, height: 500 }}
      source={require('./jack.gif')}
    />
  </View>
)

export default App;