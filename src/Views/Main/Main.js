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
  const [loading, setLoading] = useState(true);
  const continents = ['All', 'Asia', 'North America', 'Europe', 'Africa', 'South America', 'Antarctica', 'Oceania'];


  useEffect(() => {
    const fetch = async ()=> {

      try {
        const resp = await fetchCountries();
        setCountry(resp); 

      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetch(); 
  }, [error]);

  if (loading) return <h1>Loading Details</h1>;

  const filterCountries = country.filter((country) =>
    cont === 'All' || country.continent === cont);

  return (
    // <main style={{ backgroundImage: `url(${background})` }}>
    <div>
      {error && <p>{error}</p>}
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
