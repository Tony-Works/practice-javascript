import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

  const bookId = location.pathname.split('/')[2];

  const handleChange = event => {
    setBook(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleClick = async event => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/books/` + bookId, book);
      navigate('/');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>

      {error && 'Something went wrong!'}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;
