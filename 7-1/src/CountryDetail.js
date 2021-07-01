import React, { useEffect, useState } from 'react';
import axios from 'axios'
//https://restcountries.eu/rest/v2/name/Spain
function CountryDetail(props) {

    const [country, setCountry] = useState({})

    useEffect(async () => {
        let res = await axios.get(`https://restcountries.eu/rest/v2/name/${props.match.params.countryName}`)
        console.log(res)
        setCountry(res.data[0])
    }, [props])

    return (
        <div>
            CountryDetail {props.match.params.countryName}
            Capital: {country.capital}
        </div>
    );
}

export default CountryDetail;