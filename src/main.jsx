import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ApolloProvider } from '@apollo/client';
import './index.css'
import client from './api/client.js';

createRoot(document.getElementById('root')).render(  
  <StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </StrictMode>
);


