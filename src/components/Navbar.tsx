import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
       <NavLink to='/'>
           <BulletList size={30} />
       </NavLink>
       <NavLink to="/grid">
            <GridIcon size={25}/>
       </NavLink>
       <button className="filter">Filter</button>
    </NavIcons>
  )
}

export default Navbar
