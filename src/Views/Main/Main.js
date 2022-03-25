import React, { useState, useEffect } from 'react';
import './Main.css';
import fetchCountries from '../../services/fetchcountry';
import Country from '../../components/CountryCard/CountryCard';
import Filter from '../../components/Controls/Filter';
// import background from '../../background.png';
//update push

export default function Main() {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState('');
  const [cont, setCont] = useState('All');
  const continents = ['All', 'Asia', 'North America', 'Europe', 'Africa', 'South America', 'Antarctica', 'Oceania'];


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
  }, [error]);

  const filterCountries = country.filter((country) =>
    cont === 'All' || country.continent === cont);

  return (
    // <main style={{ backgroundImage: `url(${background})` }}>
    <div>
      <div>
        <Filter continents={continents} setCont={setCont}/>
        {filterCountries.map((countryData) =>(
          <div key= {countryData.id}>
            <Country name= {countryData.name} iso2= {countryData.iso2} />

          </div> 
        )
        )}
      </div>
    </div>
  );
}
