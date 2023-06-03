import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { clearActive } from '../redux/features/filters/Filter';
import { clearSearch, deviceSearch } from '../redux/features/search/Search';
import { CloseIcon, SearchIcon } from './IconList';

const SearchBarWrapper = styled.div`
    display: flex;
    align-content: center;
    width: fit-content;
    height: 3rem;
    border-radius: 5px;
    color: var(--color-grey-4);
    background: var(--color-grey-2);
    box-shadow: .3rem .5rem .7rem 0rem currentColor;
     pointer-events: auto;
    @media (max-width: 680px){
      width: 100%;
      margin:0;
      padding:0;
    }
    
   
    & .search-icon, & .close-icon {
      color: var(--color-grey-5);
      height: 1.5rem;
      margin:.7rem;
      cursor:pointer;
    }

    & .close-icon {
      visibility: hidden ;
    }

    
    & #search:not(:placeholder-shown) + div .close-icon{
      visibility: visible;
    }

    & #search{
        width: calc(10vw + 18rem); 
        height: 100%;
        border: none;
        background: transparent;
        appearance: none;
        color: var(--color-grey-5);
        font-family: inherit;

        &:focus{
            outline: none;
        }
        
        &::-webkit-search-cancel-button{
          display: none;
        }
        &::-webkit-input-placeholder{
          font-size: 1rem;
          color: currentColor;
          font-family: inherit;
        }
        
        @media (max-width: 680px){
          width: 100%;
          margin: 0;
          padding:0;
      }
    }

  `;

function SearchBar() {
  const searchValue = useAppSelector((state)=> state.search.value);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch(deviceSearch(event.target.value)) 
    dispatch(clearActive());     
}

const handleClearSearch = ()=> {
     dispatch(clearSearch())
     dispatch(clearActive());
}
  return (
    <SearchBarWrapper>
      {/* Search icon label */}
      <label htmlFor="search">
        <SearchIcon />
      </label>
      {/* Search input */}
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      {/* Clear search button */}
      <div onClick={handleClearSearch}>
        <CloseIcon />
      </div>
    </SearchBarWrapper>

  )
}

export default SearchBar





