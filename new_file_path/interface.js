import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Interface = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://blockchain.info/ticker',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  return (
    <div>
      {data && Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value.last} {value.symbol}
        </div>
      ))}
    </div>
  );
};

export default Interface;
