import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}



const App = StackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  navigationOptions: { 
    headerTitle: 'Memot',
    headerStyle: { backgroundColor: '#265366' },
    headerTitleStyle: { color: '#fff' },
  },
}); 

export default App