import React, { useEffect, useState } from 'react';
import "./Location.css"

export default function Contact() {
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
            <div>
                <h1>Current Location</h1>
                {latitude && longitude ? (
                    <p>
                        Latitude: {latitude}, Longitude: {longitude}
                    </p>
                ) : (
                    <p>Loading location...</p>
                )}
            </div>

        </>

    );
}
