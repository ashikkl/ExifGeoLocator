import React from 'react';
import '../scss/Card.scss'


const Card = (props) => (
  <div>
    <pre>
      <iframe
        title="map"
        src={props.url}
      ></iframe>
    </pre>
  </div>
);

export default Card