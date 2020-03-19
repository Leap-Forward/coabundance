import React from 'react';
import { View } from 'react-native';
import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import { getLocation, geocodeLocationByName } from '../services/location-service';

class MapContainer extends React.Component {
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
        getLocation().then(
            (data) => {
                console.log(data);
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            }
        );
    }

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }

    onMapRegionChange(region) {
        // this.setState({ region });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, zIndex: 1 }}>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                </View>

                {this.state.region['latitude'] ?
                  <View style={{ flex: 7, zIndex: 0  }}>
                      <MyMapView
                          region={this.state.region}
                          onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                  </View> : null}
            </View>
        );
    }
}

export default MapContainer;
