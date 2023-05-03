import React from 'react';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import styled from 'styled-components';
import GridList from './DataViews/GridList';
import SpecTable from './DataViews/SpecTable';
import TableList from './DataViews/TableList';
import Navbar from './Navbar';

const ViewStyle = styled.div`
    margin: 2.5rem auto;
    width: 90%;
`;


function DataViews() {
  return (
      <ViewStyle>
       {/*  <SpecTable/> */}
        <TableList/> 
       {/* <GridList/>   */}
      
      </ViewStyle>
  )
}

export default DataViews
