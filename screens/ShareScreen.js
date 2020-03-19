import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapContainer from '../containers/MapContainer';
import Constants from 'expo-constants';

export default class FindScreen extends Component {
  state = {
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

FindScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
});
