import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedConutry, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, area, population, region, borders, capital, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // setVisited(true)
        setVisited(!visited)
    }

    // console.log(handleVisitedConutry)
    // const pushHandleVisitedCountry = ()=>{
    //     handleVisitedConutry(country)
    // }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <h5> Capital: {capital}</h5>
            <h5> Code: {cca3}</h5>
            <h5> Area: {area}</h5>
            <h5>Population: {population}</h5>
            <h5>Region: {region}</h5>
            <h5>Borders: {borders}</h5>
            <div className='png'><img className='full' src={flags.png} alt="" /></div>
            {/* <button onClick={pushHandleVisitedCountry}>Mark Visited</button> */}
            <button onClick={() => handleVisitedConutry(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'wish'}</button>
            {/* {visited && 'I have visited this Country'} */}
            {visited ? 'I have visted' : 'I want to visit'}
            <hr/>
            <CountryDetails
                country={country}
                handleVisitedConutry={handleVisitedConutry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;









// const Country = (country) => {
//     console.log(country)
//     const {name, flags }=country;
//     return (
//         <div className='country'>
//             <h3>Name:{country.country?.name.common}</h3>
//             <img src={country.country?.flags.png} alt="" />
//         </div>
//     );
// };

// export default Country;