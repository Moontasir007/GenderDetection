import React from 'react'
import Location from '../../components/location/Location'
import Map from '../../components/Map/Map'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <div className='location'>
                <Location />
            </div>
            <div className='map'>
                <Map />
            </div>
        </>
    )
}
