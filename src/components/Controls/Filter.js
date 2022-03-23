import React from 'react';
import './Filter.css';

export default function Filter({ cont, setCont }) {
  return (
    <div className='filter'>
            Country Select
      <select onChange={(e) => setCont (e.target.value)}>
        {cont.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
    </div>
  );
}