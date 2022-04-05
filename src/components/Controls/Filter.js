import React from 'react';
import './Filter.css';

export default function Filter({ setCont, continents }) {
  return (
    <div className='filter'>
            Country Select
      <select onChange={(e) => setCont (e.target.value)}>
        {continents.map((continent) => (
          <option key={continent} value={continent}>{continent}</option>
        ))} 
      </select>
    </div>
  );
}