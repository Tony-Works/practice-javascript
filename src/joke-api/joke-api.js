import React, { useState } from 'react';

const url = 'https://official-joke-api.appspot.com/random_joke';

const JokeApi = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadNewJoke = async () => {
    setIsLoading(true);
    const request = await fetch(url).then(response => response.json());

    setJokes(prev => [request, ...prev]);
    setIsLoading(false);
  };

  const removeJoke = id => {
    setJokes(prev => prev.filter(element => element.id !== id));
  };

  console.log(jokes);

  return (
    <div
      className="App"
      style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Random Jokes API Test</h1>
      <button onClick={loadNewJoke}>Load new Joke</button>;
      <div className="jokes-container">
        <h3>
          {isLoading
            ? 'loading one more joke...'
            : `Random Jokes Overview ${
                jokes.length === 1
                  ? '(1 joke loaded)'
                  : `(${jokes.length} jokes loaded)`
              }`}
        </h3>
        {jokes.map((joke, key) => (
          <div
            className="joke"
            key={joke.id}
            style={{ border: '1px solid black', margin: '15px' }}>
            <div
              className="joke-metadata border-bottom"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                borderBottom: '1px solid black',
              }}>
              <p className="joke-metadata-item joke-metadata-first-item">
                # {jokes.length - key}
              </p>
              <p className="joke-metadata-item">Type: {joke.type}</p>
            </div>
            <p className="border-dotted">Setup: {joke.setup}</p>

            <p>Punchline: {joke.punchline}</p>
            <div
              className="joke-metadata border-top"
              style={{ borderTop: '1px solid black' }}>
              <button
                className="joke-button"
                onClick={removeJoke.bind(null, joke.id)}
                style={{ margin: '1em', padding: '0.5em', fontSize: '0.9em' }}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JokeApi;
