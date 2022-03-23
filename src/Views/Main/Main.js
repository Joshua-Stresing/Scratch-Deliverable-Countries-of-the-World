import React, { useState, useEffect } from 'react';
import './Main.css';
import fetchCountries from '../../services/fetchcountry';
import Country from '../../components/CountryCard/CountryCard';
// import background from '../../background.png';


export default function Main() {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async ()=> {

      try {
        const resp = await fetchCountries();
        setCountry(resp); 

      } catch (error) {
        setError(error.message);
      }
    };
    fetch(); 
  }, []);

  return (
    // <main style={{ backgroundImage: `url(${background})` }}>
    <div>
      <div>
        {/* <Country key={data.id} {...data} /> */}
        <Country />
      </div>
    </div>
  );
}
