import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import MapContainer from "../containers/MapContainer.js"

export default class ShareScreen extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  placeSelected = (place) => {
    this.toggleModal();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapContainer onPlaceSelection={place => this.placeSelected(place)} />
        <Modal isVisible={this.state.isModalVisible} coverScreen={false}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
