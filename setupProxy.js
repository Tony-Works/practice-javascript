// https://www.youtube.com/watch?v=4B5WgTiKIOY

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    // put your endpoint here
    createProxyMiddleware('/sample', {
      // put your target url
      target: 'https://tony.com',
      changeOrigin: true,
    }),
  );
};

// add package.json
// "proxy": "https://tony.com",
// "homepage": "https://localhost:3000"

// then after you setup the createProxyMiddleware
// go to your axios / fetch api and remove the baseURL

// axios
//   .post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//
// ----- remove this ------
// const baseURL = "https://tony.com"
