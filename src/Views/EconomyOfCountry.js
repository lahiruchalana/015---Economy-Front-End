import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function EconomyOfCountry(){
    const { countryName } = useParams();    
    const [country, setCountry] = useState(null)
    const url = `http://localhost:8080/countries/value/China`;

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCountry(response.data)
            })
    }, [url])

    console.log(country);

    if(country){
        content = <div>
            <h1>{country.country_population}</h1>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default EconomyOfCountry