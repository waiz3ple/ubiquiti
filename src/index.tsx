import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import GlobalStyle from './GlobalStyles';




const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={new QueryClient()}>
     <React.StrictMode>
      <GlobalStyle/>
      <App />
     </React.StrictMode>
  </QueryClientProvider>
  
);

