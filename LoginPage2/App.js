import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FormView from './components/FormView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
