import React from 'react';
import PlaceSearch from './PlaceSearch.js';
import ENV from '../env';

function MapInput(props) {
  return (
    <PlaceSearch
      googleApiKey={ENV.GOOGLE_API_KEY}
      placeHolder="Search"
      language="en-US"
      onSelect={(place) => {
        props.placeSelected(place);
      }}
    />
  );
}
export default MapInput;
