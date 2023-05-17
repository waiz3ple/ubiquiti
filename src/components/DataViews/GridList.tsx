import { AnyAction, AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { Key, useEffect } from "react";
import styled from "styled-components";
import { fetchDevies } from "../../redux/features/data/Devices";
import { useAppDispatch, useAppSelector, useSearchData } from "../../redux/hooks";
import { deviceType } from "../../redux/types";
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
    const searchData = useSearchData(data, searchValue)
    
    /* console.log('memo', searchData)
    console.log('wasiu:', data.devices) */
    
    return (
   <div>
     {loading && searchValue && <div>Loading...</div>} {/*show load only when swaping layout*/}
     {!loading && error &&  (<div>Error: {error}</div>)}
     {!loading &&  data.devices?.length && searchValue &&
     <Grid>                                  
        <p className="total-device">{`${searchData.length} ${searchData.length > 1 ? 'devices' : 'device' }`}</p>
        <div className="card-wrapper">
          { searchData.map((device: deviceType) => (
            <Card key={device.id}
            imgUrl={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`}
            productName={device.product.name} 
            productLine={device.line.name} />
           
          ))}
          
        </div>
    </Grid>}
</div>
    )
}

export default GridList;

