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
        <select
          className="search-bar"
          value={search}
          onChange={handleSearchChange}
        >
          {tokens.map(token => <option key={token} value={token}>{token}</option>)}
        </select>
        <div className="swap-container">
          <div className="swap-input">
            <select value={selectedToken} onChange={handleTokenChange}>
              {tokens.map(token => <option key={token} value={token}>{token}</option>)}
            </select>
            <input type="number" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="swap-button-container">
            <button className="swap-button" onClick={handleSwap}>Swap</button>
          </div>
          <div className="swap-output">
            <select value={selectedToken2} onChange={handleToken2Change}>
              {tokens.map(token => <option key={token} value={token}>{token}</option>)}
            </select>
            <input type="number" value={amount2} readOnly />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
