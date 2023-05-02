import React from 'react';
import styled from 'styled-components';
import GridList from './DataViews/GridList';
import SpecTable from './DataViews/SpecTable';
import TableList from './DataViews/TableList';

const ViewStyle = styled.div`
    margin: 2.5rem auto;
    width: 90%;

`;
function DataViews() {
  return (
    <ViewStyle>
      {/*  <SpecTable/> */}
       <TableList/>
       {/* <GridList/>  */}
    </ViewStyle>
  )
}

export default DataViews
