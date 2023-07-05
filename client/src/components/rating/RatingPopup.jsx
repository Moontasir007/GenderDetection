import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./RatingPopup.css";

const Rating = ({ value, onChange }) => {
    const stars = [1, 2, 3, 4, 5];
    const [rating, setRating] = useState(0);



    return (
        <div className="rating">
            {stars.map((star) => (
                <label key={star}>
                    <input
                        type="radio"
                        name="rating"
                        value={star}
                        checked={value === star}
                        onChange={() => onChange(star)}
                    />
                    <FaStar
                        className="star"
                        color={value >= star ? "#ffc107" : "#e4e5e9"}
                    />
                </label>
            ))}
        </div>
    );
};

export default Rating;
