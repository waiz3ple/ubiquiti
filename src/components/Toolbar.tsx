import React from 'react';
import styled from 'styled-components';
import FilterPanel from './FilterPanel';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const ToolbarWrapper = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 5rem;
    border-bottom: 1px solid var(--color-grey-3);
    display: flex;
    justify-content: space-between ;
    align-items: center;
    padding: 0 3rem;
    position: relative;

`;

function Toolbar() {
  return (
    <ToolbarWrapper>
        <SearchBar/>
        <Navbar/>
       <FilterPanel/>
    </ToolbarWrapper>
  )
}

export default Toolbar
