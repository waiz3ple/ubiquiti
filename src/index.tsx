import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import GlobalStyle from './GlobalStyles';
import store from './redux/store';
 



const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={new QueryClient()}>
   
      <GlobalStyle/>
      <ReduxProvider store={store}>
         <App />
      </ReduxProvider>
     
  </QueryClientProvider>
  
);

