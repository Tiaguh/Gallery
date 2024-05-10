import React, { useState } from 'react';
import "./Header.css"
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [buttonController, setButtonController] = useState(true)

    return (
        <header>
            <h1 onClick={() => navigate("/")} >galleria.</h1>

            {
                buttonController ? (
                    <button onClick={() => {
                        setButtonController(false)
                        navigate("/gallery/1")
                    }
                    }>
                        START SLIDESHOW
                    </button>

                ) : (
                    <button onClick={() => setButtonController(true)}>
                        STOP SLIDESHOW
                    </button>
                )
            }
        </header>
    )
}