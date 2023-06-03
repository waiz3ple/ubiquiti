import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TableList from '../components/DataViews/TableList';
import FilterPanel from '../components/FilterPanel';
import Header from '../components/Header';
import { BulletList, FilterIcon, GridIcon, ThreeBarsIcon } from '../components/IconList';
import SearchBar from '../components/SearchBar';
import GridLoader, { SkeletonCard } from '../components/loaders/GridLoader';
import ListLoader from '../components/loaders/ListLoader';
import UbiquitiLoadSpinner from '../components/loaders/UbiquitiLoadSpinner';
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { toggleVisibility } from '../redux/Util';
import { OpenPanel } from '../redux/features/filterPanel/Panel';

const ViewStyle = styled.div`
  margin: 2.5rem auto;
  width: 90%;
  max-width: var(--max-width);
  @media (max-width: 680px){
    width:98%
  }
`;

const ToolbarWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 5rem;
  border-bottom: 1px solid var(--color-grey-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  position: relative;
   @media (max-width: 400px){
      padding: 0 0.5rem;
    }
  & .mobile-menu{
    display: none;
  }
//------------------- mobile menu slider
   @media (max-width: 680px){
    display: grid;
    background:transparent;
    grid-template-columns: 9fr 1fr;
    margin-top: .5rem;
    margin-bottom: -18rem;
    pointer-events: none;
    border-bottom:none;
    
    
    & .nav-icons{
      pointer-events: auto;
      z-index:10;
      grid-column: 2/-1;
      display:grid !important;
      grid-template-columns: 1fr;
      align-content: center;
      justify-items:center;
      grid-gap: 2rem;
      margin-top: 3rem;
      opacity:0;
      background: var(--color-grey-2);
      /*  */
      padding: .8rem;
      background-color: var( --color-white );
      box-shadow: -1px 1.5px 3.3px 1.5px rgba(0,0,0,0.46);
      border-radius: 6px;

       & a{
        display: grid;
        justify-content:center;
        align-items: center;
        
        &:not(:last-child){
          margin-left: 1rem;
        }
      } 
    }
    & .mobile-menu{
       pointer-events: auto;
       display: block;
       margin: 0 auto;
       background: var(--color-grey-2);
       border-radius: 50%;
       padding: .4rem .6rem;
    }    
  }
//-------------------
  & .nav-icons {
    display: flex;
    align-items: center;
    color: var(--color-grey-5);

  & > *:not(:last-child) {
    margin-right: 1rem;
    @media (max-width: 400px){
      margin-right: .5rem;
    }
  }

  & > .filter {
    font-size: 1.3rem;
    cursor: pointer;
    //border: none;
    background: none;
    color: inherit;
    & :not(:first-child){
      display:none;
    }
    
    @media (max-width: 750px){
      height: 3rem;
      min-width: 2.8rem;
      & span {
        display: none;
      }
      & :not(:first-child){
        display:block;
      }
    }
  }

  & a {
    color: var(--color-grey-5);

    & > * {
      color: currentColor;
    }

    &.active > * {
      color: var(--color-grey-5);
      fill: currentColor;
    }
    
   }
  }

`;

/* const NavIcons = styled.div`
  
`; */
interface ToolbarWrapperType{
   loading:boolean;
   error: string|undefined;
}
function Home() {
//----------------for initial loading---
      const [isLoading, setIsLoading] = useState(true);
      useEffect(()=>{
        window.addEventListener('load', ()=> {
          setIsLoading(false);
          toggleVisibility(targetRef)
        })
      },[])
//----------------for initial loading---<==\\
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement>(null);
  return ( 
     <main>
       {isLoading ? (
         <UbiquitiLoadSpinner />
       ) : (
         <div>
           {/* Header */}
           <Header user="Wasiu Ramoni" />

           {/* Toolbar */}
           <ToolbarWrapper>
             {/* Search Bar */}
             <SearchBar />

             {/* Mobile Menu */}
             <div className="mobile-menu" onClick={() => toggleVisibility(targetRef)}>
               <ThreeBarsIcon size={30} />
             </div>

             {/* Navigation Icons */}
             <div className="nav-icons" ref={targetRef}>
               {/* Ubiquiti Home */}
               <NavLink to="/ubiquiti">
                 <BulletList size={30} />
               </NavLink>

               {/* Grid Link */}
               <NavLink to="/ubiquiti/grid">
                 <GridIcon size={25} />
               </NavLink>

               {/* Filter */}
               <div className="filter" onClick={() => dispatch(OpenPanel(true))}>
                 <span>Filter</span>
                 <NavLink to="#">
                   <FilterIcon size={24} />
                 </NavLink>
               </div>
             </div>

             {/* Filter Panel */}
             <FilterPanel />
           </ToolbarWrapper>

           {/* View */}
           <ViewStyle>
             <Outlet />
           </ViewStyle>
         </div>
       )}
     </main>
  );
}

export default Home;
