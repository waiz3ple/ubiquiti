import React, { useState } from 'react';
import styled from 'styled-components';
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
  const [input, setInput] = useState({ search:''});

  function handleChange(event:React.ChangeEvent<HTMLInputElement>):void{
   setInput({ search:event.target.value })
   //more incoming here
}

function clearSearchField():void{
   setInput({search:''})
}

  return (
    <SearchBarWrapper>
        <label htmlFor='search'>
           <SearchIcon />
        </label>
       <input type="search" name="search" id="search" placeholder='Search'  value={input.search} onChange={handleChange}/>
       <div onClick={clearSearchField}>
          <CloseIcon/>
       </div>
    </SearchBarWrapper>
  )
}

export default SearchBar





