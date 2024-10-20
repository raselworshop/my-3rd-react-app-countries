import './Country.css'
const Country = (country) => {
    console.log(country)
    const {name, flags }=country;
    return (
        <div className='country'>
            <h3>Name:{country.country?.name.common}</h3>
            <img src={country.country?.flags.png} alt="" />
        </div>
    );
};

export default Country;