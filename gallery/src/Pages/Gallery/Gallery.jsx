import React from 'react';
import "./Gallery.css"

import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

import cardsData from '../../cardsData';
import Footer from '../../components/Footer/Footer';

export default function Gallery() {
  const { id } = useParams();

  const painting = cardsData.find((card) => card.id === parseInt(id));

  return (
    <div>
      <Header />

      <div className="gallery-container">

        {painting ? (
          <div className="gallery">

            <div className="gallery-infos">

              <div className="gallery-img">
                <img src={painting.painting} alt={painting.painting_name} />
              </div>

              <div className="gallery-info">
                <h1>{painting.painting_name}</h1>
                <p>{painting.artist_name}</p>
              </div>

            </div>

            <div className="gallery-description">
              <p>{painting.description}</p>
            </div>

          </div>
        ) : (
          <p>Pintura não encontrada.</p>
        )}
      </div>

      <Footer
        id={painting.id}
        painting_name={painting.painting_name}
        artist_name={painting.painting_name}
      />

    </div>
  )
}