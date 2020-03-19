import React from 'react';
import PlaceSearch from './PlaceSearch.js';
import ENV from '../env';

function MapInput(props){
  return (
    <PlaceSearch
        googleApiKey={ENV.GOOGLE_API_KEY}
        placeHolder={"Search"}
        language={"en-US"}
        onSelect={place => {
            this.props.goToPoint(get(place, 'result.geometry.location.lat'), get(place, 'result.geometry.location.lng'))
        }}
    />
  );
}
export default MapInput;
