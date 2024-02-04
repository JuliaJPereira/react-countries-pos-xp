import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { allCountries } from '../data/countries';
import TextInput from './../components/TextInput';

export default function ReactCountriesPage() {
  const [ContryFilter, setCountryFilter] = useState('Argentina');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do país (pelo menos 3 caracteres):"
          inputValue={ContryFilter}
          autoFocus
          onInputChange={handleCountryFilterChange}
        />
      </Main>
    </div>
  );
}
