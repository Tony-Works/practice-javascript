import React, { useEffect, useState } from 'react';

const Table = () => {
  const [Post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then(data => {
        setPost(data);
        console.log(data);
      });
  }, []);

  const IndexOfLastPost = currentPage * PostPerPage;
  const IndexOfFirstPost = IndexOfLastPost - PostPerPage;
  const CurrentPosts = Post.slice(IndexOfFirstPost, IndexOfLastPost);
  console.log(IndexOfFirstPost, IndexOfLastPost, CurrentPosts);

  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(Post.length / PostPerPage); i++)
    PageNumbers.push(i);
  console.log(PageNumbers);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {Post.length !== 0 ? (
        <div className="p-8 px-40 mt-36">
          <h1 className="text-5xl mb-4 font-extrabold ">React Pagination</h1>

          {CurrentPosts.map((item, idx) => (
            <div key={idx}>
              <p style={{ padding: 5 }}>
                {item.id} - {item.title}
              </p>
            </div>
          ))}

          <div style={{ display: 'flex', padding: 20 }}>
            <button
              style={{
                padding: 3,
                background: '#4da6ff',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}>
              prev
            </button>
            {/* pagination stuff */}
            <div style={{ display: 'flex', position: 'relative' }}>
              {PageNumbers.map(PageNumber => (
                <div
                  style={{ padding: 10, cursor: 'pointer' }}
                  key={PageNumber}
                  onClick={() => {
                    setCurrentPage(PageNumber);
                  }}
                  className={
                    PageNumber == currentPage
                      ? 'p-2 px-3 text-white bg-green-700 focus:ring hover:bg-pink-800 cursor-pointer' //this css when selcted
                      : 'p-2 px-3 text-white bg-pink-600 focus:ring hover:bg-pink-800 cursor-pointer'
                  }>
                  {PageNumber}
                </div>
              ))}
            </div>
            <button
              style={{
                padding: 3,
                background: '#4da6ff',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (currentPage < PageNumbers.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="p-40 text-8xl font-bold">loading ....</p> //if data hasn't come yet show this
      )}
    </div>
  );
};

export default Table;
