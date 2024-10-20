
const CountryData = ({country, handleVisitedConutry, handleVisitedFlags}) => {
    console.log('inside country data', country, handleVisitedConutry, handleVisitedFlags)
    return (
        <div>
            <h3><small>Country Data: {country.name.common}</small></h3>
        </div>
    );
};

export default CountryData;