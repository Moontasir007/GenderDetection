import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MyComponent = (props) => {
    return (
        <div>
            <h1>My Google Map Component</h1>
            <Map google={props.google} />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD9kLV0CS2Yl1Nud4EGsVSIrQYdf-ZUqtc',
})(MyComponent);
