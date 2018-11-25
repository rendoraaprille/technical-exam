import React from 'react'
import {StyleSheet, View, TextInput, Text,  Button, Image} from 'react-native'

//import SignInButton from './SignInButton'

export default class Form extends React.Component {

  onSignInButtonHandler = () => {

  }

  render(){
    return (
      <View>
        <Image source={require('../assets/Logo.png')} />
        <Text style={styles.labelStyle}> Email </Text>
        <TextInput style={styles.inputStyle}
          label='Email'
          placeholder='Input email address'
        />
        <Text style={styles.labelStyle}> Password </Text>
        <TextInput style={styles.inputStyle}
          label='Password'
          placeholder='Input password'
        />
        <Button title="Sign in" uppercase={false} onPress={this.onSignInButtonHandler} style={styles.buttonStyle}/>
      </View>
    );
  }
}
// purple #7361b2

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    height: 45,
    padding: 5,
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 2,
    marginTop: 2,
    marginBottom: 15,
  },

  labelStyle: {
    fontWeight: 'bold'
  },

  buttonStyles: {
    height: 45
  }
});
