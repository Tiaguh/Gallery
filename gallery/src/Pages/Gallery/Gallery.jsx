import React from 'react';
import Header from '../../components/Header/Header';

export default function Gallery(props) {
  return (
    <div key={props.id} >
      <Header />

      <div>
        <img src={props.img} />
        <h1>{props.painting_name}</h1>
        <p>{props.artist_name}</p>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias magni porro eos odit modi rerum, numquam suscipit. Animi, fuga, nulla nisi cumque placeat mollitia earum officiis modi adipisci exercitationem vitae.o</p>
      </div>

    </div>
  )
}