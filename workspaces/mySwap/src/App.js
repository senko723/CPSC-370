import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <img src="./chapman_panther.png" alt="Chapman Panther" />
      </header>
    </div>
  );
}

export default App;
