import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import TableList from '../components/DataViews/TableList'
import FilterPanel from '../components/FilterPanel'
import Header from '../components/Header'
import { BulletList, GridIcon } from '../components/IconList'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Toolbar from '../components/Toolbar'

const ViewStyle = styled.div`
    margin: 2.5rem auto;
    width: 90%;
`;

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


function Home() {
  return (
    <div>
       <Header user='Wasiu Ramoni'/>
         <ToolbarWrapper>
           <SearchBar/>
            <NavIcons>
               <NavLink to='/'>
                   <BulletList size={30} />
               </NavLink>
               <NavLink to="/grid">
                    <GridIcon size={25}/>
               </NavLink>
               <button className="filter">Filter</button>
            </NavIcons>

           <FilterPanel/>
        </ToolbarWrapper>
        <ViewStyle>
       {/*  <SpecTable/> */}
        {/* <TableList/>  */}
       {/* <GridList/>   */}
          <Outlet/>
      </ViewStyle>
    </div>
  )
}

export default Home
