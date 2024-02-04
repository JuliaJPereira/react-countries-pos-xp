import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { allCountries } from '../data/countries';
import TextInput from './../components/TextInput';
import Countries from '../components/Countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter(visitedCountryId => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }
    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  console.log(visitedCountries);

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
        <Countries onCountryClick={toggleVisitedCountry}>
          {filteredCountries}
        </Countries>
      </Main>
    </div>
  );
}
