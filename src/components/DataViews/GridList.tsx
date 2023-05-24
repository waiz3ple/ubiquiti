import { AnyAction, AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { Key, useEffect } from "react";
import styled from "styled-components";
import { fetchDevies } from "../../redux/features/data/Devices";
import { loadData } from "../../redux/features/data/UpdatedData";
import { useAppDispatch, useAppSelector, useSearchData } from "../../redux/hooks";
import { OriginalType, UpdatedType } from "../../redux/types";
import { includeActiveProp } from "../../redux/util";
import Card from "./Card";

const Grid = styled.div`
    & .total-device{
        color: var(--color-grey-4);
        padding: 0 3rem 1rem;
    }
   & .card-wrapper{
       display: grid;
       grid-template-columns: repeat(5, 1fr);
       gap: 2rem;
   }   
`;

function GridList(){
    const devicesData = useAppSelector(state => state.devices);
    const searchValue = useAppSelector((state)=> state.search.value);
   
    const dispatch = useAppDispatch()
    // decison: since it a static data, I will reduce the number of API request to one by creating seprate reducer for updated data
    useEffect(()=>{ 
        dispatch(fetchDevies())   
    },[])
    
    
    const { loading, data, error } = devicesData;
    const searchedDatas = useSearchData(data, searchValue)  // searched result
    const activatedSearchData = includeActiveProp( searchedDatas ) // adding isActive properties to returning search result
   
    useEffect(()=>{  // 1. sending this updated result up to the loadData state.
        dispatch(loadData(activatedSearchData))   
    },[searchValue])
     const filteredData = useAppSelector(state => state.updated);
     //console.log('yes',filteredData)
    return (
   <div>
     {loading && searchValue && <div>Loading...</div>} {/*show load only when swaping layout*/}
     {!loading && error &&  (<div>Error: {error}</div>)}
     {!loading &&  filteredData?.length && searchValue &&
     <Grid>                                  
        <p className="total-device">{`${filteredData.length} ${filteredData.length > 1 ? 'devices' : 'device' }`}</p>
        <div className="card-wrapper">
          { filteredData?.map(({id, product, line, icon}:UpdatedType) => (
            <Card key={id}
            imgUrl={`https://static.ui.com/fingerprint/ui/icons/${icon.id}_257x257.png`}
            productName={product.name} 
            productLine={line.name} />
          ))}
        </div>
    </Grid>}
</div>
    )
}

export default GridList;

