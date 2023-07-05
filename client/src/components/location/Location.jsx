import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import './Location.css';

export default function Location() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <>
            <div className='center'>
                <h1>Current Location</h1>
                {latitude && longitude ? (
                    <div style={{ height: '400px', width: '100%' }}>
                        <GoogleMap
                            mapContainerStyle={{ height: '100%', width: '100%' }}
                            center={{ lat: latitude, lng: longitude }}
                            zoom={14}
                        >
                            <Marker position={{ lat: latitude, lng: longitude }} />
                        </GoogleMap>
                    </div>
                ) : (
                    <p>Loading location...</p>
                )}
            </div>
        </>
    );
}
