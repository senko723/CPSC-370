import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <p>Uniswap functionality will go here</p>
      </header>
    </div>
  );
}

export default App;
