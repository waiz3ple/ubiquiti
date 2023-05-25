import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
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
        width: calc(10vw + 15rem);   // media query on this
        height: 100%;
        border: none;
        background: transparent;
        appearance: none;
        color: var(--color-grey-5);
        
        &:focus{
            outline: none;
        }
        
        &::-webkit-search-cancel-button{
          display: none;
        }
        
    }

  `;

function SearchBar() {
  const searchValue = useAppSelector((state)=> state.search.value);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
   dispatch(deviceSearch(event.target.value))      
}
  return (
    <SearchBarWrapper>
        <label htmlFor='search'>
           <SearchIcon />
        </label>
       <input type="search" name="search" id="search" placeholder='Search' value={searchValue}
        onChange={handleChange}
       />
       <div onClick={()=> dispatch(clearSearch()) }>
          <CloseIcon/>
       </div>
    </SearchBarWrapper>
  )
}

export default SearchBar





