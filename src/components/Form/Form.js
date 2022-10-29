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
        if (!citiesList.includes(e.target.value)) {
            setCitiesList(current => [...current, e.target.value]);
        }
    }

    return (
        <form className='form'>
            <div className='form__container'>
                <div className='form__subcontainer'>
                    <h2 className='form__subtitle'>Dados Pessoais</h2>
                    <label className='form__label'>
                        <span className='form__label__type'>Nome</span>
                        <input type="text" name="name" id="name" required className='form__label__input' />
                    </label>
                    <label className='form__label'>
                        <span className='form__label__type'>Email</span>
                        <input type='email' name="email" id="email" required className='form__label__input' />
                    </label>
                    <label className='form__label'>
                        <span className='form__label__type'>Telefone</span>
                        <IMaskInput name="phone" mask="(00) 00000-0000" required className='form__label__input' />
                    </label>
                    <label className='form__label'>
                        <span className='form__label__type'>CPF</span>
                        <IMaskInput name="cpf" mask="000.000.000-00" required className='form__label__input' />
                    </label>
                </div>
                <div className='form__subcontainer'>
                    <h2 className='form__subtitle'>Destinos de Interesse</h2>
                    <label>
                        <span className='form__label__type'>País</span>
                        <select name="countries" id="countries" onChange={handleCountryChange} className='form__label__select' required>
                            <option value="" disabled selected>Selecione o país</option>
                            {countries.map((country, index) => <option value={country.code} key={index}>{country.name_ptbr}</option>)}
                        </select>
                    </label>
                    <ListLocations locations={countriesList} />
                    <label className='form__label__city'>
                        <span className='form__label__type'>Cidade</span>
                        <select name="cities" id="cities" onChange={handleCityChange} className='form__label__select' required>
                            <option value="" disabled selected>Selecione a cidade</option>
                            {filteredCities.map((city, index) => <option value={city.name_ptbr} key={index}>{city.name}</option>)}
                        </select>

                    </label>
                    <ListLocations locations={citiesList} />
                </div>
            </div>
            <button type="submit" className='btn'>Enviar</button>
        </form>
    );
}

export default Form;
