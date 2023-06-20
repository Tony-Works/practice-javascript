import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { data } from './crud';

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = e => {
    if (name && age && gender) {
      e.preventDefault();
      const ids = uuid();
      let uniqueID = ids.slice(0, 8);
      let setName = name,
        setAge = age,
        setGender = gender;

      data.push({
        id: uniqueID,
        name: setName,
        age: setAge,
        gender: setGender,
      });

      navigate('/');
    }
  };

  return (
    <div>
      <h3>Create</h3>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 15,
            alignItems: 'center',
          }}>
          <input
            onChange={e => setName(e.target.value)}
            placeholder="Input Name..."
            input="text"
            id="name"
            style={{
              with: 500,
              border: '3px solid #00B4CC',
              padding: 5,
              height: 15,
              borderRadius: '5px',
              outline: 'none',
              color: '#9DBFAF',
            }}
          />
          <input
            onChange={e => setAge(e.target.value)}
            placeholder="Input Age..."
            input="text"
            id="age"
            style={{
              with: 300,
              border: '3px solid #00B4CC',
              padding: 5,
              height: 15,
              borderRadius: '5px',
              outline: 'none',
              color: '#9DBFAF',
            }}
          />
          <input
            onChange={e => setGender(e.target.value)}
            placeholder="Input Gender..."
            input="text"
            id="gender"
            style={{
              with: 300,
              border: '3px solid #00B4CC',
              padding: 5,
              height: 15,
              borderRadius: '5px',
              outline: 'none',
              color: '#9DBFAF',
            }}
          />
        </div>
        <button
          style={{
            width: '50%',
            borderRadius: 2,
            border: 'none',
            paddingRight: 13,
            cursor: 'pointer',
            paddingLeft: 13,
            backgroundColor: '#008CBA',
            fontSize: 13,
            color: 'white',
          }}
          onClick={e => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
