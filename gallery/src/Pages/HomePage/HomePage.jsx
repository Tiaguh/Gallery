import React from 'react';
import "./HomePage.css";

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import cardsData from "../../cardsData.jsx";

export default function HomePage() {
  return (
    <div className="home-page-container"> 
      <Header />

      <div className="card-container">
        {
          cardsData.map(card => (
            <Card
              key={card.id}
              painting={card.painting}
              painting_name={card.painting_name}
              artist_name={card.artist_name}
            />
          ))
        }
      </div>
    </div>
  )
}
