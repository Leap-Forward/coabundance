import React from 'react';
import PlacesInput from 'react-native-places-input';

function MapInput(props){
  return (
    <PlacesInput
        googleApiKey={'AIzaSyC0N-w9QA1O9CVqJnA45N-4L7aca_7IxDE'}
        placeHolder={"Search"}
        language={"en-US"}
        onSelect={place => {
            this.props.goToPoint(get(place, 'result.geometry.location.lat'), get(place, 'result.geometry.location.lng'))
        }}
    />
  );
}
export default MapInput;
