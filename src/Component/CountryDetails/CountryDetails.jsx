import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    const { country, handleVisitedFlags, handleVisitedConutry }=props;
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedConutry={handleVisitedConutry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;