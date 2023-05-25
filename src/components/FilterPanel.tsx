import { useState } from "react";
import styled from "styled-components";
import { CloseIcon, StopButton } from "./IconList";
/* import { useDispatch, useSelector } from "react-redux/es/exports"; */
import { loadData } from "../redux/features/data/UpdatedData";
import { OpenPanel } from "../redux/features/filterPanel/Panel";
import { clearActive, makeActiveOption } from "../redux/features/filters/Filter";
import { filterOut, useAppDispatch, useAppSelector } from "../redux/Hooks";
import { UpdatedType } from "../redux/Types";


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

            & li {
                cursor:pointer;
                .stop-button{
                    position: relative;
                    top: .7rem;   
                }
            }
        }
    }
`;



function FilterPanel() {
    const showPanel = useAppSelector((state)=> state.panel.isOpened);
    const updatedData = useAppSelector( state=> state.updated)
    const dispatch = useAppDispatch();
    const filterOptions = useAppSelector(state => state.filter) 
    //-------------------------
   // const [seachResult, setSearchResult] = useState(updatedData)
    //-------------------------
    function handleClick(event: React.MouseEvent<HTMLLIElement>, filterBy: string) {
        dispatch(makeActiveOption(event.currentTarget.id));
        //--------------
        const filteredResult = filterOut(updatedData, filterBy);
        dispatch(loadData(filteredResult));
        //--------------
    }

    const handleCloseButton = (event:React.MouseEvent<HTMLElement>) => {
        dispatch(OpenPanel(false));
        dispatch(clearActive())
        //dispatch( loadData(seachResult) )
    }
    
  return (
    <FilterWrapper  showPanel={showPanel}>
    
       <div className="panelHeading">
         <p>Filter</p>
         <div  onClick={handleCloseButton}> 
            <CloseIcon/>
        </div>
       </div>
       <div className="panelBody">
           <h3>Product line</h3>
           <ul>
             {filterOptions?.map(({option, id, isActive}) =>(
             <li key={id} id={id} onClick={(event)=> handleClick(event, option)}><StopButton isActive={isActive} size={20}/> {option}</li>
              ))}
           </ul>
       </div>
    </FilterWrapper>
  )
}

export default FilterPanel
