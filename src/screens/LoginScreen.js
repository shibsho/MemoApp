import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component{

	state = {
		email: '',
		password: '',
	}
	
	handleSubmit(){
		firebase.auth().signInWithEmailAndPassword( this.state.email, this.state.password )
			.then( (user) => {
				const resetAction = NavigationActions.reset({
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'Home'}),
					],
				});
				this.props.navigation.dispatch(resetAction);
			})
			.catch( () => {
			})
	}

	handlePress(){
		this.props.navigation.navigate('Signup');
	}	

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>ログイン</Text>
				<TextInput 
					style={styles.input}
					value={this.state.email}
					onChangeText={(text) => {this.setState({ email:text}); }} 
					autoCapitalize="none"
					placeholder="Email Address"
					underlineColorAndroid="transparent"
				/>
				<TextInput 
					style={styles.input}
					value={this.state.password}
					onChangeText={(text) => {this.setState({ password:text}); }} 
					autoCapitalize="none"
					placeholder="Password"
					secureTextEntry={true}
					underlineColorAndroid="transparent"
				/>
				<TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor='#C70F56' >
					<Text style={styles.buttonTitle}>ログインする</Text>
				</TouchableHighlight>

				<TouchableOpacity onPress = { this.handlePress.bind(this)}>
					<Text style={styles.signup}>メンバー登録する</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		padding: 24,
		backgroundColor: '#fff',
	},
	input:{
		backgroundColor: '#eee',
		height: 48,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: '#DDD',
		padding: 8,
	},
	title:{
		fontSize: 38,
		alignSelf: 'center',
		marginBottom: 24,
	},
	button: {
		backgroundColor: '#E31676',
		height: 48,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		width: '70%',
		alignSelf: 'center',
	},
	buttonTitle: {
		color: '#fff',
		fontSize: 18,
	},
	signup: {
		marginTop: 30,
		fontSize: 16,
		alignSelf: 'center',
	}
});

export default LoginScreen;