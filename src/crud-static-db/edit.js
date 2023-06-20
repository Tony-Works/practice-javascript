import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { data } from './crud';

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [id, setId] = useState('');

  var index = data
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleUpdate = e => {
    if (name && age && gender) {
      e.preventDefault();

      let item = data[index];
      item.name = name;
      item.age = age;
      item.gender = gender;

      navigate('/');
    }
  };

  useEffect(() => {
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setGender(localStorage.getItem('Gender'));
    setId(localStorage.getItem('Id'));
  }, []);

  return (
    <div>
      <h3>Edit</h3>
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
            value={name}
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
            value={age}
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
            value={gender}
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
          onClick={e => handleUpdate(e)}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Add;
