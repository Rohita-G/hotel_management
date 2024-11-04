import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Placesmap(props) {
    return (
        <div className="places-maps bg-white position-relative">
            <Map
                google={props.google}
                zoom={12}
                initialCenter={{
                    lat: 37.6288872, lng: -79.5451583 // Updated to Natural Bridge, Virginia
                }}
            >
                <Marker position={{
                    lat: 37.6288872, lng: -79.5451583 // Updated to Natural Bridge, Virginia
                }} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ",
})(Placesmap);
