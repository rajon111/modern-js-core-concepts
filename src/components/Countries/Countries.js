import React from 'react';
// import React, {useState,useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = React.useState([])
 
    React.useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div > 
            <h1>Hello from countries: {countries.length}</h1>
            <div className='countries-container'>
            {
                countries.slice(0,51).map(country => <Country 
                    country={country}
                    key={country.cca3}
                    // name={country.name.common} 
                    // population={country.population} 
                    //  area={country.area}
                    >

                    </Country>)
            }
            </div>
        </div>
    )
}



export default Countries;