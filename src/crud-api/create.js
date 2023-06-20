import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

  const handleChange = event => {
    setBook(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleClick = async event => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/books', book);
      navigate('/');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Add New Books</h1>
      <input
        type="text"
        placeholder="Title..."
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description..."
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Price..."
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Cover..."
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
      {error && 'Something went wrong!'}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Create;
