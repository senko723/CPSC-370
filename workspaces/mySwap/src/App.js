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

  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [amount, setAmount] = useState(0);
  const [selectedToken2, setSelectedToken2] = useState(tokens[1]);
  const [amount2, setAmount2] = useState(0);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleToken2Change = (event) => {
    setSelectedToken2(event.target.value);
  };

  const handleSwap = () => {
    // Swap logic goes here
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
        <div className="swap-container">
          <select value={selectedToken} onChange={handleTokenChange}>
            {tokens.map(token => <option key={token} value={token}>{token}</option>)}
          </select>
          <input type="number" value={amount} onChange={handleAmountChange} />
          <select value={selectedToken2} onChange={handleToken2Change}>
            {tokens.map(token => <option key={token} value={token}>{token}</option>)}
          </select>
          <input type="number" value={amount2} readOnly />
          <button onClick={handleSwap}>Swap</button>
        </div>
      </header>
    </div>
  );
}

export default App;
