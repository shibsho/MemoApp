import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
	render() {
		return (
			<View style={styles.circleButton}>
			  <Text style={styles.circleButtonTitle}>
			  	{ this.props.children }
			  </Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#FFF',
  },
});


export default CircleButton;