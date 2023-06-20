import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const data = [
  { id: '1', name: 'Yon', age: 21, gender: 'Female' },
  { id: '2', name: 'Anom', age: 19, gender: 'Male' },
  { id: '3', name: 'Megha', age: 22, gender: 'Female' },
  { id: '4', name: 'Subham', age: 25, gender: 'Male' },
];

const CrudApp = () => {
  const navigate = useNavigate();

  const handleDelete = id => {
    var index = data
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    data.splice(index, 1);
    navigate('/');
  };

  const handleEdit = (id, name, age, gender) => {
    localStorage.setItem('Id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Gender', gender);
  };

  return (
    <>
      <h3>CRUD OPERATION</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <table
          style={{ border: '1px solid forestgreen', width: 700, height: 180 }}>
          <tr>
            <th style={{ borderBottom: '1px solid black', fontSize: 14 }}>
              Id
            </th>
            <th style={{ borderBottom: '1px solid black', fontSize: 14 }}>
              Name
            </th>
            <th style={{ borderBottom: '1px solid black', fontSize: 14 }}>
              Age
            </th>
            <th style={{ borderBottom: '1px solid black', fontSize: 14 }}>
              Gender
            </th>
            <th style={{ borderBottom: '1px solid black', fontSize: 14 }}>
              Action
            </th>
          </tr>
          {data && data.length > 0 ? (
            data.map((item, key) => {
              return (
                <tr key={key}>
                  <td style={{ textAlign: 'center', fontSize: 14 }}>
                    {item.id}
                  </td>
                  <td style={{ textAlign: 'center', fontSize: 14 }}>
                    {item.name}
                  </td>
                  <td style={{ textAlign: 'center', fontSize: 14 }}>
                    {item.age}
                  </td>
                  <td style={{ textAlign: 'center', fontSize: 14 }}>
                    {item.gender}
                  </td>
                  <td style={{ textAlign: 'center', fontSize: 14 }}>
                    <Link to="/edit">
                      <button
                        onClick={() =>
                          handleEdit(item.id, item.age, item.gender, item.name)
                        }
                        style={{
                          borderRadius: 2,
                          border: 'none',
                          paddingRight: 15,
                          paddingLeft: 15,
                          backgroundColor: 'orange',
                          fontSize: 13,
                          cursor: 'pointer',
                          color: 'white',
                        }}>
                        Edit
                      </button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        borderRadius: 2,
                        border: 'none',
                        paddingRight: 13,
                        cursor: 'pointer',
                        paddingLeft: 13,
                        backgroundColor: 'red',
                        fontSize: 13,
                        color: 'white',
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p style={{ textAlign: 'center' }}>No Data Available</p>
          )}
        </table>

        <br />
        <br />
        <Link to="/create">
          <button
            style={{
              width: '100%',
              borderRadius: 2,
              border: 'none',
              paddingRight: 13,
              cursor: 'pointer',
              paddingLeft: 13,
              backgroundColor: '#008CBA',
              fontSize: 13,
              color: 'white',
            }}>
            Add
          </button>
        </Link>
      </div>
    </>
  );
};

export default CrudApp;
