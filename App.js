import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from './src/components/MemoList'
import AppBar from './src/components/AppBar'
import CircleButton from './src/elements/CircleButton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <AppBar />

        <MemoList />

        <CircleButton>+</CircleButton>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});









