import React, { useState } from 'react';
import styled from 'styled-components';
import { CloseIcon, SearchIcon } from './IconList';

const SearchBarWrapper = styled.div`
    display: flex;
    align-content: center;
    background: var(--color-grey-2);
    width: fit-content;
    height: 3rem;
    border-radius: 5px;
    box-shadow: .3rem .6rem .8rem 0rem var(--color-grey-4);
    
   
    & .search-icon, & .close-icon {
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





