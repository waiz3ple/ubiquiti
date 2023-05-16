import { useState } from "react";
import styled from "styled-components";
import { CloseIcon, StopButton } from "./IconList";
/* import { useDispatch, useSelector } from "react-redux/es/exports"; */
import { OpenPanel } from "../redux/features/filterPanel/Panel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


interface FilterWrapperProps {
    showPanel: boolean;
}
const FilterWrapper = styled.div<FilterWrapperProps>`
    width: 18rem;
    border-radius: 5px;
    background-color: var(--color-white);
    box-shadow: -.4rem .5rem 1.4rem 0rem var(--color-grey-4);
    z-index: 100;
    position: absolute;
    right: 1%;
    top: 30%;
    visibility: ${ ({showPanel}) => showPanel ? 'visible' : 'hidden'};

    & .panelHeading{
        height: 3.7rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--color-grey-3);
        padding: 0 1.5rem;
        align-items: center;   
    }
    
    & .panelBody{
        & h3 {
            padding: 1.5rem 0 0 1.5rem;
        }
        & ul{
            padding: 1.5rem 1.6rem 3rem;
            list-style-type: none;

            & li .stop-button{
                    position: relative;
                    top: .7rem;
                }
        }
    }
`;


const panelOptions: string[] = ['UniFi', 'UniFiLTE', 'UniFiProtect', 'UniFiAccess', 'AirMax', 'EdgeMax'];

function FilterPanel() {
   const showPanel = useAppSelector((state)=> state.panel.isOpened);
   const dispatch = useAppDispatch();
  return (
    <FilterWrapper  showPanel={showPanel}>
       <div className="panelHeading">
         <p>Filter</p>
         <div  onClick={()=> dispatch(OpenPanel(false))}> 
            <CloseIcon/>
        </div>
       </div>
       <div className="panelBody">
           <h3>Product line</h3>
           <ul>
             {panelOptions.map(option =>(
             <li key={option}><StopButton size={20}/> {option}</li>
              ))}
           </ul>
       </div>
    </FilterWrapper>
  )
}

export default FilterPanel