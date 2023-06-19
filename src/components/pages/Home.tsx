import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { OpenPanel } from '../../redux/features/filterPanel/Panel';
import FilterPanel from '../FilterPanel';
import Header from '../Header';
import { useAppDispatch } from '../Hooks';
import { BulletList, FilterIcon, GridIcon, ThreeBarsIcon } from '../IconList';
import SearchBar from '../SearchBar';
import { toggleVisibility } from '../Util';
import UbiquitiLoadSpinner from '../loaders/UbiquitiLoadSpinner';

const ViewStyle = styled.div`
  margin: 2.5rem auto;
  width: 90%;
  max-width: var(--max-width);
  @media (max-width: 680px) {
    width: 98%;
    margin: auto;
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

  @media (min-width: 681px) {
    // keep showing menu before collapse
    & .mobile-menu {
      display: none;
    }
    & .nav-icons {
      display: block;
      opacity: 1 !important; // it can only be !important because I need
      visibility: visible !important; // to update  inline set by GSAP
    }
  }
  //------------------- mobile menu slider ==>
  @media (max-width: 680px) {
    display: grid;
    background: transparent;
    grid-template-columns: 9fr 1fr;
    margin-top: 0.5rem;
    margin-bottom: -16.5rem;
    pointer-events: none;
    border-bottom: none;
    padding: 0 1rem;

    & .nav-icons {
      pointer-events: auto;
      z-index: 10;
      grid-column: 2/-1;
      display: grid !important;
      grid-template-columns: 1fr;
      align-content: center;
      justify-items: center;
      grid-gap: 2rem;
      margin-top: 3rem;
      opacity: 0;
      visibility: hidden;
      padding: 0.8rem;
      background-color: var(--color-white);
      box-shadow: -1px 1.5px 3px 1.5px rgba(0, 0, 0, 0.46);
      border-radius: 6px;

      & a {
        display: grid;
        justify-content: center;
        align-items: center;

        &:not(:last-child) {
          margin-left: 1rem;
        }
      }
    }
    & .mobile-menu {
      pointer-events: auto;
      display: block;
      margin: 0 auto;
      background: var(--color-grey-2);
      border-radius: 50%;
      padding: 0.4rem 0.6rem;
    }
  }
  //-------------------   <==
  & .nav-icons {
    display: flex;
    align-items: center;
    color: var(--color-grey-5);
    opacity: 1;

    & > *:not(:last-child) {
      margin-right: 1rem;
      @media (max-width: 400px) {
        margin-right: 0.5rem;
      }
    }

    & > .filter {
      font-size: 1.3rem;
      cursor: pointer;
      //border: none;
      background: none;
      color: inherit;
      & :not(:first-child) {
        display: none;
      }

      @media (max-width: 850px) {
        height: 3rem;
        min-width: 2.8rem;
        & span {
          display: none;
        }
        & :not(:first-child) {
          display: block;
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


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement>(null);
  //----------------for initial loading--- ==>
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Simulate a few seconds asynchronous task
    // Clean up the timer if the component unmounts before the task is complete
    return () => clearTimeout(timer);
  }, []);

  //----------------for initial loading---<==\\
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
            <div
              className="mobile-menu"
              onClick={() => toggleVisibility(targetRef)}
            >
              <ThreeBarsIcon size={30} />
            </div>

            {/* Navigation Icons */}
            <div className="nav-icons" ref={targetRef}>
              {/* Ubiquiti Home */}
              <NavLink to="/">
                <BulletList size={30} />
              </NavLink>

              {/* Grid Link */}
              <NavLink to="/grid">
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
