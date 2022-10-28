import { useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';

import ListLocations from '../ListLocations/ListLocations';

import './Form.css';

const countryUrl = "https://amazon-api.sellead.com/country";
const cityUrl = "https://amazon-api.sellead.com/city";

const Form = () => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    const [chosenCountry, setChosenCountry] = useState("");

    const [countriesList, setCountriesList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

    useEffect(() => {
        fetch(countryUrl)
            .then(res => res.json())
            .then(countryData => setCountries(countryData));

        fetch(cityUrl)
            .then(res => res.json())
            .then(cityData => setCities(cityData));
    }, [])

    useEffect(() => {
        const availableCities = cities.filter(value => value.country_code === chosenCountry)

        setFilteredCities(availableCities);

    }, [chosenCountry, cities])



    const handleCountryChange = (e) => {
        setChosenCountry(e.target.value);
        const countryArray = countries.filter(country => country.code === e.target.value)
        if (!countriesList.includes(countryArray[0].name_ptbr)) {
            setCountriesList(current => [...current, countryArray[0].name_ptbr]);
        }
    }

    const handleCityChange = (e) => {
        setCitiesList(current => [...current, e.target.value]);
    }

    return (
        <form>
            <h2>Dados Pessoais</h2>
            <label>
                Nome
                <input type="text" name="name" id="name" required />
            </label>
            <label>
                Email
                <input type='email' name="email" id="email" required />
            </label>
            <label>
                Telefone
                <IMaskInput name="phone" mask="(00) 00000-0000" required />
            </label>
            <label>
                CPF
                <IMaskInput name="cpf" mask="000.000.000-00" required />
            </label>
            <h2>Destinos de Interesse</h2>
            <label>
                País
                <select name="countries" id="countries" onChange={handleCountryChange}>
                    {countries.map((country, index) => <option value={country.code} key={index}>{country.name_ptbr}</option>)}
                </select>
            </label>
            <ListLocations locations={countriesList} />
            <label>
                Cidade
                <select name="cities" id="cities" onChange={handleCityChange}>
                    {filteredCities.map((city, index) => <option value={city.name_ptbr} key={index}>{city.name}</option>)}
                </select>

            </label>
            <ListLocations locations={citiesList} />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;
