import axios from 'axios';
import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DataViews from './components/DataViews';
import GridList from './components/DataViews/GridList';
import TableList from './components/DataViews/TableList';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
 

const router = createBrowserRouter(
               createRoutesFromElements(
          <Route path="/" element={<Home/>}>
              <Route index element={<TableList/>}/>
              <Route path="grid" element={<GridList/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Route>

          )
     )

const App = () => {
   const { data, isLoading, isError } = useQuery('ubquiti-api', ()=> {
     return axios.get('https://static.ui.com/fingerprint/ui/public.json')
    })
console.log(data)
  return (
       /*  {/* <main>
           <Home/>
           <NotFound/> 
        </main> */ 
        <RouterProvider router={router}/>
  );
}

export default App;
