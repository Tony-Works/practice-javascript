import React, { useState, useEffect } from 'react';
import { getPosts } from './utils';

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleSearch = e => {
    e.preventDefault();
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      post =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value),
    );

    setSearchResults(resultsArray);
  };

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  const Post = ({ post }) => {
    return (
      <article
        style={{
          width: '50%',
          border: '2px solid #00B4CC',
          margin: 2,
        }}>
        <h2>Title: {post.title}</h2>
        <p>Content: {post.body}</p>
        <p>Post ID: {post.id}</p>
      </article>
    );
  };

  const results = searchResults.map(post => <Post key={post.id} post={post} />);

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return (
    <>
      <p>Search</p>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSearch}
            placeholder="Search..."
            input="text"
            id="search"
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

          <button
            style={{
              height: 30,
            }}>
            Search
          </button>
        </form>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {content}
      </div>
    </>
  );
};

export default Search;
