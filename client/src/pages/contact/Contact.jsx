import React from 'react';
import Location from '../../components/location/Location';
import Map from '../../components/Map/Map';
import Footer from '../../components/footer/footer';
import './Contact.css';

export default function Contact() {
    return (
        <>
            <div className='verticalAlignBox'>
                <div className='location'>
                    <Location />
                </div>
                <div className='map'>
                    <Map />
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
