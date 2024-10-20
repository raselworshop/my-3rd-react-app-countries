import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries]= useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))
    }, [])

    const handleVisitedConutry=country=>{
        console.log('Add visited Country here')
        // console.log(country)
        // visitedCountries.push(country) can't be possible to change DOM
        const newVisitedCountries=[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag=>{
        // console.log('visited flags')
        const newVisitedFlags=[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div className="countries-container">
            <h2>Countries: {countries.length}</h2>
            {/* visited countries */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => 
                    <Country key={country.cca3} 
                    handleVisitedConutry={handleVisitedConutry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}> </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;