import axios from 'axios';
import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import GridList from './components/DataViews/GridList';
import TableList from './components/DataViews/TableList';
import Header from "./components/Header";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
 

const router = createBrowserRouter(
               createRoutesFromElements(
         /*  <Route path="/" element={<Home/>}> */
          <Route path="/ubiquiti" element={<Home/>}>  {/* remove! only for github */}
              <Route index element={<TableList/>}/>
              <Route path="grid" element={<GridList/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Route>

          )
     )

const App = () =>   <RouterProvider router={router}/>

export default App;
