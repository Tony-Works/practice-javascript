import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './search/search-api';
import CustomSearch from './search/search-static-data';
import Todo from './todo/todo';
import Table from './table-pagination/table';
import Select from './select-data/select-data';
import SelectMultiple from './select-multiple/select-multiple';
import CrudApp from './crud-static-db/crud';
import Edit from './crud-static-db/edit';
import Add from './crud-static-db/add';
import Books from './crud-api/crud-api';
import CreateBooks from './crud-api/create';
import UpdateBooks from './crud-api/update';
import JokeApi from './joke-api/joke-api';
import Palindrome from './palindrome/palindrome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <CustomSearch /> */}
        {/* <Todo /> */}
        <Palindrome />
        {/* <JokeApi /> */}
        {/* <Table /> */}
        {/* <Search /> */}
        {/* <SelectMultiple /> */}
        {/* <Select /> */}

        {/* crud static data */}
        {/* <Routes>
          <Route path="/" element={<CrudApp />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes> */}

        {/* crud api */}
        {/* <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/create-books" element={<CreateBooks />} />
          <Route path="/update-books/:id" element={<UpdateBooks />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
