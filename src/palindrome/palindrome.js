import React, { useMemo, useState } from 'react';

const Palindrome = () => {
  const [word, setWord] = useState('');

  const isPalindrome = useMemo(() => {
    if (!word) {
      return false;
    } else {
      return word === word.split('').reverse().join('');
    }
  }, [word]);

  return (
    <div style={{ margin: 100 }}>
      <form>
        <div>
          <label style={{}}>Word to check:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            placeholder="Input word..."
            style={{
              with: 300,
              border: '3px solid #00B4CC',
              padding: 5,
              height: 15,
              borderRadius: '5px',
              outline: 'none',
              color: '#9DBFAF',
            }}
            value={word}
            onChange={e => setWord(e.target.value)}
          />
        </div>
      </form>
      <div style={{ margin: 20 }}>
        Is Palindrome: {isPalindrome ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default Palindrome;
