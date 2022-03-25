import React from 'react';
import './CountryCard.css';

export default function Country({ name, iso2 }) {
  console.log(iso2);
  const flag = iso2.toLowerCase();



  return ( 
    <div className="card">
      <div className="name">
        {name}
      </div>
      <div>
        <img src={`https://flagcdn.com/16x12/${flag}.png`} />
      </div>
    </div>
  );
}