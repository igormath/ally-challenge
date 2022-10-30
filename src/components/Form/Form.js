import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';
import Select from 'react-select';

import './Form.css';

const countryUrl = "https://amazon-api.sellead.com/country";
const cityUrl = "https://amazon-api.sellead.com/city";

const Form = () => {
    const countryRef = useRef();
    const cityRef = useRef();

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const [citiesList, setCitiesList] = useState([]);

    const [refactoredCountry, setRefactoredCountry] = useState([]);

    const [selectedCountries, setSelectedCountries] = useState([]);

    useEffect(() => {
        fetch(countryUrl)
            .then(res => res.json())
            .then(countryData => setCountries(countryData));

        fetch(cityUrl)
            .then(res => res.json())
            .then(cityData => setCities(cityData));

    }, []);

    useEffect(() => {
        const optionsCountries = countries.map(country => ({
            label: country.name_ptbr,
            value: country.code,
        }))

        setRefactoredCountry(optionsCountries);
    }, [countries]);

    useEffect(() => {
        setCitiesList([]);
        selectedCountries.forEach((country) => {
            const filteredCities = cities.filter(city => city.country_code === country.value);
            filteredCities.forEach((value) => {
                const city = {
                    value: value.country_code,
                    label: value.name,
                }
                setCitiesList(current => [...current, city]);
            })
        })
    }, [selectedCountries, cities]);

    const handleChange = (option) => {
        setSelectedCountries(option);
    }

    const handleSubmit = (e) => {
        if (!countryRef.current.state.ariaSelection) {
            e.preventDefault();
            alert("Por favor, selecione ao menos um País.");
        }
        if (!cityRef.current.state.ariaSelection) {
            e.preventDefault();
            alert("Por favor, selecione ao menos uma Cidade.");
        }
    }

    return (
        <form className='form'>
            <div className='form__container'>
                <div className='form__subcontainer'>
                    <h2 className='form__subtitle'>Dados Pessoais</h2>
                    <label className='form__label'>
                        <span className='form__label__type'>Nome <i className='form__asterisk'>(*)</i></span>
                        <input type="text"
                            name="name"
                            id="name"
                            pattern="[a-zA-Z]*"
                            title='Este campo só aceita letras.'
                            required
                            className='form__label__input' />
                    </label>
                    <label className='form__label'>
                        <span className='form__label__type'>Email <i className='form__asterisk'>(*)</i></span>
                        <input type='email'
                            name="email"
                            id="email"
                            required
                            className='form__label__input' />
                    </label>
                    <label className='form__label'>
                        <span className='form__label__type'>Telefone <i className='form__asterisk'>(*)</i></span>
                        <IMaskInput name="phone"
                            mask="(00) 00000-0000"
                            required
                            className='form__label__input' />
                    </label>
                    <label className='form__label'>
                        <span className='form__label__type'>CPF <i className='form__asterisk'>(*)</i></span>
                        <IMaskInput name="cpf"
                            mask="000.000.000-00"
                            required
                            className='form__label__input' />
                    </label>
                    <p className='form__required-alert'>(*): Campos obrigatórios.</p>
                </div>
                <div className='form__subcontainer'>
                    <h2 className='form__subtitle'>Destinos de Interesse</h2>
                    <label>
                        <span className='form__label__type'>País <i className='form__asterisk'>(*)</i></span>
                        <Select isMulti
                            options={refactoredCountry}
                            onChange={handleChange}
                            className="form__label__select"
                            required={true}
                            ref={countryRef} />
                    </label>
                    <label className='form__label__city'>
                        <span className='form__label__type'>Cidade <i className='form__asterisk'>(*)</i></span>
                        <Select isMulti
                            options={citiesList}
                            className="form__label__select"
                            required={true}
                            ref={cityRef} />
                    </label>
                </div>
                <p className='form__required-alert-mobile'>(*): Campos obrigatórios.</p>
            </div>
            <button type="submit" className='btn' onClick={handleSubmit}>Enviar</button>
        </form>
    );
}

export default Form;
