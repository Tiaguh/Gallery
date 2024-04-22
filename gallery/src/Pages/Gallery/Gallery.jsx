import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

import cardsData from '../../cardsData';

export default function Gallery() {
  const { id } = useParams();

  const painting = cardsData.find((card) => card.id === parseInt(id));

  return (
    <div>
      <Header />

      {painting ? (
        <div>
          <img src={painting.painting} alt={painting.painting_name} />
          <h1>{painting.painting_name}</h1>
          <p>{painting.artist_name}</p>
        </div>
      ) : (
        <p>Pintura não encontrada.</p>
      )}
    </div>
  )
}