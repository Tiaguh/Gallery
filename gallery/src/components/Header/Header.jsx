import React, { useState } from 'react';
import "./Header.css"
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [buttonController, setButtonController] = useState(false)

    return (
        <header>
            <h1 onClick={()=> navigate("/")} >galleria.</h1>

            {
                buttonController ? (
                    <button onClick={() => setButtonController(true)}>START SLIDESHOW</button>
                ) : (
                    <button onClick={() => setButtonController(false)}>STOP SLIDESHOW</button>
                )
            }

        </header>
    )
}