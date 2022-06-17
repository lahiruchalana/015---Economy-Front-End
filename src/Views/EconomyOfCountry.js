import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function EconomyOfCountry(){
    const { countryName } = useParams();    
    const [country, setCountry] = useState(null)
    const url = `http://localhost:8080/countries/value/${countryName}`;

    let content = <div> Please Check the API, The record is not available now...</div>>

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCountry(response.data)
            })
    }, [url])


    if(country){
        content = <div className='container'>
            <h1 className="title">Economy Data of {country[0].name}</h1>
            <h3>Name of the country: <h3 className="data"> {country[0].name} </h3></h3> <br/>
            <h3>Region of the country: <h3 className="data"> {country[0].region } </h3> </h3> <br/>
            <h3>Population of {country[0].name}: <h3 className="data"> {country[0].population} </h3> </h3> <br/>
            <h3>Gross Domestic Production of {country[0].name}: <h3 className="data"> {country[0].gdp},000 $ </h3> </h3> <br/>
            <h3>Current Account Balance of {country[0].name}: <h3 className="data"> {country[0].cab},000 $  </h3> </h3> <br/>
            <h3>Gross Domestic Production Per Capita of {country[0].name}: <h3 className="data"> {country[0].gdpperCapita} $ </h3> </h3> <br/>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default EconomyOfCountry