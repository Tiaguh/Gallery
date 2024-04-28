import React from 'react';
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-infos">
                <h1>Nome da pintura</h1>
                <h2>Nome do artista</h2>
            </div>

            <div>
                <button>next</button>
                <button>before</button>
            </div>
        </div>
    )
}