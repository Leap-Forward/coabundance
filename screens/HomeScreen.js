import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapContainer from '../containers/MapContainer';
import Constants from 'expo-constants';

export default class HomeScreen extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <View style={styles.container}>
        <MapContainer />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
});
