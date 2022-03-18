import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name,area,population,flags} = props.country
    return(
        <div className='country'>
          <h4>Name:{name.common}</h4>
          <img src={flags.png} alt="" />
          <p>Population: {population}</p>
          <p><small>Area:{area}</small></p>
        </div>
      )
};

export default Country;