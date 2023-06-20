import React, { useState, useLayoutEffect } from 'react';

const planets = [
  { id: 1, name: 'Earth', value: 'Earth' },
  { id: 2, name: 'Mars', value: 'Mars' },
  { id: 3, name: 'Jupiter', value: 'Jupiter' },
  { id: 4, name: 'Saturn', value: 'Saturn' },
];

const countries = [
  { id: 1, name: 'USA', value: 'USA', planet: 'Earth' },
  { id: 2, name: 'Australia', value: 'Australia', planet: 'Earth' },
  { id: 3, name: 'UAE', value: 'UAE', planet: 'Mars' },
  { id: 4, name: 'Canada', value: 'Canada', planet: 'Mars' },
  { id: 5, name: 'England', value: 'England', planet: 'Jupiter' },
  { id: 6, name: 'Italy', value: 'Italy', planet: 'Jupiter' },
  { id: 7, name: 'Philippines', value: 'Philippines', planet: 'Saturn' },
  { id: 8, name: 'India', value: 'India', planet: 'Saturn' },
];

const cities = [
  { id: 1, name: 'Los Angeles', value: 'Los Angeles', country: 'USA' },
  { id: 2, name: 'Dubai', value: 'Dubai', country: 'UAE' },
  { id: 3, name: 'Torento', value: 'Torento', country: 'Canada' },
  { id: 4, name: 'Washington', value: 'Washington', country: 'USA' },
  { id: 5, name: 'Gorc', value: 'Gorc', country: 'England' },
  { id: 6, name: 'London', value: 'London', country: 'England' },
  { id: 7, name: 'Milan', value: 'Milan', country: 'Italy' },
  { id: 8, name: 'Manila', value: 'Manila', country: 'Philippines' },
  { id: 9, name: 'Cabanatuan', value: 'Cabanatuan', country: 'Philippines' },
  { id: 10, name: 'Dingalan', value: 'Dingalan', country: 'Philippines' },
  { id: 11, name: 'New Delhi', value: 'New Delhi', country: 'India' },
];

const SelectMultiple = () => {
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countryItems, setCountryItems] = useState([]);
  const [cityItems, setCityItems] = useState([]);

  useLayoutEffect(() => {
    setCountryItems([]);
    setCityItems([]);
    setSelectedCountry('');
    setSelectedCity('');
    selectedPlanet &&
      setCountryItems(countries.filter(c => c.planet === selectedPlanet));
  }, [selectedPlanet]);

  useLayoutEffect(() => {
    setCityItems([]);
    setSelectedCity('');

    selectedCountry &&
      setCityItems(cities.filter(c => c.country === selectedCountry));
  }, [selectedCountry]);

  return (
    <div style={{ display: 'flex-box', width: 'vh' }}>
      <select
        value={selectedPlanet.id}
        onChange={e => setSelectedPlanet(e.target.value)}>
        <option value="">Select Planet</option>
        {planets.map(item => (
          <option key={item.id} value={item.name} name={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <select
        value={selectedCountry?.id}
        onChange={e => setSelectedCountry(e.target.value)}>
        {countryItems.map(item => (
          <option key={item.id} value={item.name} name={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <select
        value={selectedCity?.id}
        onChange={e => setSelectedCity(e.target.value)}>
        {cityItems.map(item => (
          <option key={item.id} value={item.name} name={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() =>
          console.log({
            planet: selectedPlanet,
            country: selectedCountry,
            city: selectedCity,
          })
        }>
        Log Select
      </button>
    </div>
  );
};

export default SelectMultiple;
