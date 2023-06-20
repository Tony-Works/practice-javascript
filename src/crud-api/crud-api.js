import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CrudApi = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:3000/books');
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async id => {
    try {
      await axios.delete('http://localhost:3000/books/' + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>CRUD OPERATION API LIVE</h1>
      <div className="books">
        {books.map((book, i) => (
          <div className="book" key={i}>
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update-books/${book.id}`}
                style={{ color: 'inherit', textDecoration: 'none' }}>
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className="addHome">
        <Link
          to="/create-books"
          style={{ color: 'inherit', textDecoration: 'none' }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default CrudApi;
