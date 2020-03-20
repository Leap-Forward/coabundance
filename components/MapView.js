import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MyMapView = props => (
  <MapView
    style={{ flex: 1 }}
    region={props.region}
    showsUserLocation
    onRegionChange={reg => props.onRegionChange(reg)}
  />
);
export default MyMapView;
