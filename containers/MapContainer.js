import React from 'react';
import { View } from 'react-native';
import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import {
  getLocation,
  geocodeLocationByName,
} from '../services/location-service';

class MapContainer extends React.PureComponent {
  state = {
    region: {}
  };

  constructor(props) {
    super(props);
  }

  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     return {errorMessage: 'Permission to access location was denied'};
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   return location;
  // }

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      console.log(data);
      this.setState({
        region: {
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003
        }
      });
    });
  }

  placeSelected(result) {
    const { result: place } = result;
    const {
      geometry: {
        location: { lat, lng },
      },
    } = place;

    this.setState({
      region: {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }
    });
    if (this.props.onPlaceSelection) {
      this.props.onPlaceSelection(place);
    }
  }

  onMapRegionChange(region) {
    // this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, zIndex: 1 }}>
          <MapInput placeSelected={place => this.placeSelected(place)} />
        </View>

        {this.state.region.latitude ? (
          <View style={{ flex: 7, zIndex: 0 }}>
            <MyMapView
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default MapContainer;
