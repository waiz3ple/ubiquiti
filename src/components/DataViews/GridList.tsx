import { AnyAction, AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { Key, useEffect } from "react";
import styled from "styled-components";
import NotFound from "../../pages/NotFound";
import { useAppDispatch, useAppSelector, useSearch } from "../../redux/Hooks";
import { OriginalType, UpdatedType } from "../../redux/Types";
import { includeActiveProp, processError } from "../../redux/Util";
import { fetchDevices } from "../../redux/features/data/Devices";
import { loadData } from "../../redux/features/data/UpdatedData";
import { loadStableData } from "../../redux/features/data/UpdatedStableData";
import GridLoader from "../loaders/GridLoader";
import Card from "./Card";

interface LoadAndErrorType{
    loading: boolean;
    error: string|undefined
}

const Grid = styled.div<LoadAndErrorType>`
    & .total-device{
        color: var(--color-grey-4);
        padding: 0 3rem 1rem;
        visibility: ${({loading, error}) => (!loading && error)? 'hidden':'visible'}
    }
   & .card-wrapper{
       display: grid;
       grid-template-columns: repeat(5, 1fr);
       gap: 2rem;
   } 
   
      @media (max-width: 1110px){
      & .card-wrapper{
       grid-template-columns: repeat(4, 1fr);
      }
     }

     @media (max-width: 900px){
      & .card-wrapper{
       grid-template-columns: repeat(3, 1fr);
      }
     }

     @media (max-width: 660px){
      & .card-wrapper{
       grid-template-columns: repeat(2, 1fr);
      }
     }

     @media (max-width: 400px){
      & .card-wrapper{
       grid-template-columns: repeat(1, 100%);
       gap:  1rem auto;
       justify-items: center;
       padding:0;
      }
     }
`;

function GridList(){
       //---------------------
   const { loading, data, error } = useAppSelector(state => state.devices);
    const searchValue = useAppSelector((state)=> state.search.value);
    // decison: since it a static data, I will reduce the number of API request to one by creating seprate reducer for updated data
    useEffect(()=>{ 
        dispatch(fetchDevices())   
    },[])
    
    
    const searchedResult = useSearch(data, searchValue)  // searched result
    const searchedResultActive = includeActiveProp( searchedResult ) // adding isActive properties to search result
    const dispatch = useAppDispatch()
    
    useEffect(()=>{  // 1. sending this updated result up to the updated state.
      dispatch(loadData(searchedResultActive)) 
      dispatch(loadStableData(searchedResultActive))     
    },[searchValue])
    
    
    const updatedData = useAppSelector(state => state.updated);
    // console.log('Table',filteredData)
      
    //---------------------
   
    return (
   <div>
     {loading && searchValue && <GridLoader/>} {/*show load only when swaping layout*/}
     {!loading && error &&  (NotFound(processError(error)))}
     {!loading && searchValue  &&
     <Grid loading={loading} error={error}>                                  
        <p className="total-device">{`${updatedData?.length??0}${updatedData?.length>1?'devices':'device'}`}</p>
        <div className="card-wrapper">
          {updatedData?.length ? updatedData?.map(({id, product, line, icon}:UpdatedType) => (
            <Card key={id}
            imgUrl={`https://static.ui.com/fingerprint/ui/icons/${icon.id}_257x257.png`}
            productName={product.name} 
            productLine={line.name} />
          )):''}
        </div>
    </Grid>}
</div>
    )
}

export default GridList;

