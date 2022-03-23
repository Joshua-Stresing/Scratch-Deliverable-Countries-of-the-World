import React from 'react';


export default function Country({ name, iso2 }) {

  const iso = iso2.toLowerCase();

  return ( 
    <div className='card'>
      <div className='name'>
        {name}
      </div>
      <div>
        <img src= {`https://flagcdn.com/16x12/${iso}.png`} />
      </div>
    </div>
  );
}
