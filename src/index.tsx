import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={new QueryClient()}>
     <React.StrictMode>
        <Router>
           <App />
        </Router>
     </React.StrictMode>
  </QueryClientProvider>
  
);

