import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name, flags, area, population, region, borders, capital} = country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <h5> Capital: {capital}</h5>
            <h5> Currencies: {}</h5>
            <h5> Area: {area}</h5>
            <h5>Population: {population}</h5>
            <h5>Region: {region}</h5>
            <h5>Borders: {borders}</h5>
            <div className='png'><img className='full' src={flags.png} alt="" /></div>
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