/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../scss/Card.scss'

const Card = (props) => (
  <div className="card">
    <pre>
      <iframe title={props.id} src={props.url}></iframe>
    </pre>
    <div>
      <img className="image" src={props.file} alt={props.fileName}/>
    </div>
  </div>
);

export default Card