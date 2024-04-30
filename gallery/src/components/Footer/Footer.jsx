import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

export default function Footer(props) {
    const { id, painting_name, artist_name } = props;
    const navigate = useNavigate();

    const handleNext = () => {
        if (id >= 17) {
            navigate(`/gallery/1`); 
        } else {
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
                <button onClick={handleBefore}>
                    <RxTrackPrevious color="#000" size={32} />
                </button>

                <button onClick={handleNext}>
                    <RxTrackNext color="#000" size={32} />
                </button>
            </div>
        </div>
    );
}
