import { AnyAction, AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { Key, useEffect } from "react";
import styled from "styled-components";
import { fetchDevies } from "../../redux/features/data/Devices";
import { useAppDispatch, useAppSelector, useSearchData } from "../../redux/hooks";
import { deviceType } from "../../redux/types";
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
    useEffect(()=>{ 
        dispatch(fetchDevies())
    },[])
    
    const { loading, data, error } = devicesData;
    const searchedDatas = useSearchData(data, searchValue)  // resulting searched datas
    const activatedSearchData = includeActiveProp( searchedDatas ) // adding isActive properties to each data element
    console.log('plus', activatedSearchData)
    return (
   <div>
     {loading && searchValue && <div>Loading...</div>} {/*show load only when swaping layout*/}
     {!loading && error &&  (<div>Error: {error}</div>)}
     {!loading &&  data.devices?.length && searchValue &&
     <Grid>                                  
        <p className="total-device">{`${activatedSearchData.length} ${activatedSearchData.length > 1 ? 'devices' : 'device' }`}</p>
        <div className="card-wrapper">
          { activatedSearchData?.map(({id, product, line, icon}) => (
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

