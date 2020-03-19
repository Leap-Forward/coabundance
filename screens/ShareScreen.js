import React, {Modal, Text, PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import MapContainer from '../containers/MapContainer';
import Constants from 'expo-constants';

export default class ShareScreen extends PureComponent {
  state = {
    modalVisible: false
  };

  constructor(props) {
    super(props);
  }
 
  showModal(visible) {
      this.setState({ modalVisible: visible });
  }

  placeSelected(place) {
    console.log(place);
    this.showModal(true);
  }

  render() {
    return (
   
      <View style={styles.container}>
        <MapContainer onPlaceSelection={place => this.placeSelected(place)} />
      </View>
      
    );
  }
}

ShareScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
});
