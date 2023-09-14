
import React from 'react';
import { createTRPCClient } from '@trpc/client';
import { TRPCProvider, useQuery } from '@trpc/react';
import logo from './assets/logo.png'; // Import the logo

const client = createTRPCClient({
  url: 'http://localhost:3000/api/trpc',
});
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/logo.png'; // Import the logo

  
    <TRPCProvider client={client}>
      <div>
        <img src={logo} alt="Logo" /> {/* Use the logo */}
        {dataQuery.data ? (
          <div>
            <h1>{dataQuery.data.title}</h1>
            <p>{dataQuery.data.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </TRPCProvider>
=======
    <div>
      <img src={logo} alt="Logo" /> {/* Add the logo */}
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
