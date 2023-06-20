import React, { useState } from 'react';

const countries = [
  { name: 'Philippines', value: 'PH', cities: ['Manila', 'Cebu City'] },
  { name: 'India', value: 'IND', cities: ['New Delhi', 'Mumbai'] },
  { name: 'UAE', value: 'UAE', cities: ['Dubai', 'Abu Dhabi'] },
  { name: 'China', value: 'CH', cities: ['Beijing', 'Hongkong'] },
];

const SelectData = () => {
  const [country, setCountry] = useState();

  return (
    <div className="App">
      <select
        value={country}
        onChange={e => {
          setCountry(e.target.value);
        }}>
        <option value="">Select Country</option>
        {countries.map((item, i) => (
          <option key={i} value={i}>
            {item.name}
          </option>
        ))}
      </select>

      <select>
        {countries[country]?.cities.map((city, i) => {
          return <option key={i}>{city}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectData;
