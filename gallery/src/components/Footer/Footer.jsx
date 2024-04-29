import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer(props) {
    const { id, painting_name, artist_name } = props;

    const navigate = useNavigate();

    const handleNext = () => {
        if (id >= 0) {
            navigate(`/gallery/${id + 1}`);
        }
    };

    const handleBefore = () => {
        if (id > 1) {
            navigate(`/gallery/${id - 1}`);
        } else {
            navigate(`/gallery/1`);
        }
    };

    return (
        <div className="footer-container">
            <div className="footer-infos">
                <h1>{painting_name}</h1>
                <h2>{artist_name}</h2>
            </div>

            <div>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleBefore}>Before</button>
            </div>
        </div>
    );
}