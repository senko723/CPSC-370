import React, { useState } from 'react';
import logo from './chapman_panther.png';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [tokens] = useState([
    'Token 1',
    'Token 2',
    'NFT Collection 1',
    'NFT Collection 2',
    // Add more tokens and NFT collections as needed
  ]);
  const filteredTokens = tokens.filter(token => token.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search tokens and NFT collections..."
        />
        {filteredTokens.map(token => <p key={token}>{token}</p>)}
        <p>Uniswap functionality will go here</p>
      </header>
    </div>
  );
}

export default App;
