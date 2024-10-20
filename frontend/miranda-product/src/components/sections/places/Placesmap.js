import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Placesmap(props) {
    return (
        <div className="places-maps bg-white position-relative">
            <Map
                google={props.google}
                zoom={12}
                initialCenter={{
                    lat: 31.53912, lng: -89.29163
                }}
            >
                <Marker position={{
                    lat: 31.53912, lng: -89.29163
                }} />
            </Map>
        </div>
    );
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ",
})(Placesmap);