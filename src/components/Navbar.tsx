import React from 'react';
import styled from 'styled-components';
import { BulletList, GridIcon } from './IconList';

const NavIcons  = styled.div`
   display: flex;
   align-items: center;
  
   & > *:not(:last-child){
    margin-right:1rem;
   }

   & > .filter{
      font-size: 1.3rem;
      cursor: pointer;
      border: none;
      background: none;
      color: inherit;
   }
`;

function Navbar() {
  return (
    <NavIcons>
      <BulletList size={30} />
      <GridIcon size={25}/>
      <button className="filter">Filter</button>
    </NavIcons>
  )
}

export default Navbar
