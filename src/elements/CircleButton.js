import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
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

		const { style, color, onPress } = this.props;

		let bgColor = '#E31676';
		let textColor = '#fff';

		if (color === 'white') {
			bgColor = '#fff';
			textColor = '#E31676';
		}

		return (
			<TouchableHighlight style={[styles.container, style]} onPress={ onPress } underlayColor=
			"transparent">
				<View style={[styles.circleButton, { backgroundColor: bgColor }]}>
				  {
				  	this.state.fontLoaded ? (
				  		<Text style={[styles.circleButtonTitle, { color : textColor }]}>
				  			{ this.props.children }
				  		</Text>
				  	) : null
				  }
				</View>
			</TouchableHighlight>
		);
	}
}


const styles = StyleSheet.create({
container: {
	position: "absolute",
    bottom: 24,
    right: 24,
},
  circleButton: {
    width: 48,
    height: 48,
    margin: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    zIndex: 10,
  },
  circleButtonTitle: {
  	fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
});


export default CircleButton;