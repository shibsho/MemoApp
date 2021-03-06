import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

require("firebase/firestore");

import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH__DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};

firebase.initializeApp(config);



const App = StackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  navigationOptions: { 
    headerTitle: 'Memot',
    headerStyle: { backgroundColor: '#265366' },
    headerTitleStyle: { color: '#fff' },
    headerTintColor: '#fff',
    headerBackTitle: null,
  },
}); 

export default App