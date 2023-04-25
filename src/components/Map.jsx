import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '400px',
};

export class MapContainer extends React.Component {
  render() {
    const { google } = this.props;
    return (
      <Map
        google={google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194
        }}
      >
        <Marker
          position={{ lat: 37.7749, lng: -122.4194 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCsfD5bLPqax9Kz1i9ngR6eqri5ETuRsCE'
})(MapContainer);