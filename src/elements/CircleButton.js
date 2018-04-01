import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Font } from 'expo';

class CircleButton extends React.Component {
	state = {
			fontLoaded: false,
		}
		async componentWillMount() {
		    await Font.loadAsync({
		      'FontAwesome': require('../../assets/fonts/fa-solid-900.ttf'),
		    });

		    this.setState({ fontLoaded: true });
		  }
	render() {

		const { style, color } = this.props;

		let bgColor = '#E31676';
		let textColor = '#fff';

		if (color === 'white') {
			bgColor = '#fff';
			textColor = '#E31676';
		}

		return (
			<View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
			  {
			  	this.state.fontLoaded ? (
			  		<Text style={[styles.circleButtonTitle, { color : textColor }]}>
			  			{ this.props.children }
			  		</Text>
			  	) : null
			  }
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
  	fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
});


export default CircleButton;