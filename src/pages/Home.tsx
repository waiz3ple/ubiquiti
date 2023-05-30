import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import TableList from '../components/DataViews/TableList'
import FilterPanel from '../components/FilterPanel'
import Header from '../components/Header'
import { BulletList, GridIcon } from '../components/IconList'

import SearchBar from '../components/SearchBar'
import GridLoader, { SkeletonCard } from '../components/loaders/GridLoader'
import ListLoader from '../components/loaders/ListLoader'
import UbiguitiLoadSpinner from '../components/loaders/UbiquitiLoadSpinner'
import { useAppDispatch } from '../redux/Hooks'
import { OpenPanel } from '../redux/features/filterPanel/Panel'

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
   color: var(--color-grey-5)
  
   & > *:not(:last-child){
    margin-right:1rem;
   }

   & > .filter{
      font-size: 1.3rem;
      cursor: pointer;
      border: none;
      background:none;
      color: inherit;
   }
   
   & a{
      color: var(--color-grey-5);
      
      & > * {
         color: currentColor
      }
      
      &.active > * {
        color: var(--color-grey-5);
        fill: currentColor; 
      }
   }
`;

function Home() {
   const dispatch = useAppDispatch();
  return (
    <div>
       <Header user='Wasiu Ramoni'/>
         <ToolbarWrapper>
           <SearchBar/>
            <NavIcons>
              {/*  <NavLink to='/'> */}
               <NavLink to='/ubiquiti'>  {/* remove! only for github */}
                   <BulletList size={30} />
               </NavLink>
              {/*  <NavLink to="/grid"> */}
               <NavLink to="/ubiquiti/grid">   {/* remove! only for github */}
                    <GridIcon size={25}/>
               </NavLink>
               <button className="filter" onClick={()=> dispatch(OpenPanel(true))}>Filter</button>
            </NavIcons>
           <FilterPanel/>
        </ToolbarWrapper>
        <ViewStyle>
          {/* <UbiguitiLoadSpinner/>  */}   {/*  <ListLoader/> */}       
             {/*  <GridLoader/>  */}       <Outlet/> 
      </ViewStyle>
    </div>
  )
}

export default Home


