import React from 'react'
import {Button} from 'react-native'

const signInButton = props =>{
  return (
    <Button title="Sign in" onPress={props.onSignIn}/>
  );
}

export default signInButton;
