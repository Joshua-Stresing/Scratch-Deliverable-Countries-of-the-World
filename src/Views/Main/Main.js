import React, { useState, useEffect } from 'react';
import './Main.css';
import fetchCountries from '../../services/fetchcountry';
// import background from '../../background.png';


export default function Main() {
  const [error, setError] = useState('');
  useEffect(() => {
    const fetch = async ()=> {
      try {
        await fetchCountries(); 
      } catch (error) {
        setError(error.message);
      }
    };
    fetch(); 
  }, []);

  return (
    // <main style={{ backgroundImage: `url(${background})` }}>
    <main>Main
    </main>
  );
}
