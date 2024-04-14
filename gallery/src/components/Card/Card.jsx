import React from 'react';
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">

      <img src={props.painting} alt={props.painting_name} />

      <div className="description">
        <h1>{props.painting_name}</h1>
        <p>{props.artist_name}</p>
      </div>
      
    </div>
  );
}
