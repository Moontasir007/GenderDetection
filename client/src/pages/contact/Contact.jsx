import React from 'react';
import Location from '../../components/location/Location';

import Footer from '../../components/footer/footer';
import './Contact.css';

export default function Contact() {
    return (
        <>
            <div className='verticalAlignBox'>
                <div className='location'>
                    <Location />
                </div>


            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
