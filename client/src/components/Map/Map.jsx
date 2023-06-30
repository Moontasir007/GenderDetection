import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Map.css'

const MyComponent = (props) => {
    return (
        <div className='mapBox'>
            <h1 className='center'>My Google Map Component</h1>
            <Map google={props.google} />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD9kLV0CS2Yl1Nud4EGsVSIrQYdf-ZUqtc',
})(MyComponent);
