import React from 'react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  const navigate = useNavigate();

  return (
    <button
      key={props.id}
      className="card"
      onClick={() => {
        navigate(`/gallery/${props.id}`)
      }}
    >

      <img src={props.painting} alt={props.painting_name} />

      <div className="description">
        <h1>{props.painting_name}</h1>
        <p>{props.artist_name}</p>
      </div>

    </button>
  );
}
