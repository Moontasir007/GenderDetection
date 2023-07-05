import { useState } from 'react';
import Location from '../../components/location/Location';


import Footer from '../../components/footer/footer';
import './Contact.css';
import RatingPopup from '../../components/rating/RatingPopup.jsx';

export default function Contact() {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };
    return (
        <>
            <div className='verticalAlignBox'>
                <div>
                    <h1>Rating Example</h1>
                    <RatingPopup value={rating} onChange={handleRatingChange} />
                </div>
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
