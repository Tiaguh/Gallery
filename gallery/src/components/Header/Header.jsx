import React, { useState } from 'react';
import "./Header.css"

export default function Header() {
    const [buttonController, setButtonController] = useState(false)

    return (
        <header>
            <h1>galleria.</h1>

            {
                buttonController ? (
                    <button onClick={()=> setButtonController(true)}>START SLIDESHOW</button>
                ) : (
                    <button onClick={()=> setButtonController(false)}>STOP SLIDESHOW</button>
                )
            }

        </header>
    )
}