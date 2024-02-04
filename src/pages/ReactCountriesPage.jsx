import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { allCountries } from '../data/countries';
import TextInput from './../components/TextInput';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('Argentina');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const countryFilterLowerCase = countryFilter.trim().toLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  console.log(filteredCountries);

  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do país (pelo menos 3 caracteres):"
          inputValue={countryFilter}
          autoFocus
          onInputChange={handleCountryFilterChange}
        />
      </Main>
    </div>
  );
}
