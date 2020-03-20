import React, { Component } from 'react';
import { Button, View } from 'react-native';
import Modal from 'react-native-modal';
import MapContainer from '../containers/MapContainer';
import ShareResourceForm from '../components/ShareResourceForm';

export default class ShareScreen extends Component {
  state = {
    isModalVisible: false,
  };


  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  placeSelected = (place) => {
    this.setState({ isModalVisible: true });
  }

  resourceFound = (resource) => {
    console.log(resource);
    this.hideModal();
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapContainer onPlaceSelection={place => this.placeSelected(place)} />
        <Modal isVisible={isModalVisible} coverScreen={false}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ShareResourceForm onClose={this.resourceFound} />
          </View>
        </Modal>
      </View>
    );
  }
}
