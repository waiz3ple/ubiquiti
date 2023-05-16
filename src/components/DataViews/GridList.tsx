import { AnyAction, AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { Key, useEffect } from "react";
import styled from "styled-components";
import { fetchDevies } from "../../redux/features/data/Devices";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
interface  deviceType{
    line: {
        name:string
    };
     product: {
        name:string
    };
    id: Key; 
    icon: { 
        id: string; 
      } 
    }

function GridList(){
    const devicesData = useAppSelector(state => state.devices);
    const dispatch = useAppDispatch()
    useEffect(()=>{ 
        dispatch(fetchDevies())
    },[])
    
    const { loading, data, error } = devicesData;
    //const memoData = useSearchData(devicesData, 'airMax')
    
    console.log('wasiu:', data.devices)
    return (
   <div>
     {loading && <div>Loading...</div>}
     {!loading && error &&  (<div>Error: {error}</div>)}
     {!loading &&  data.devices?.length &&
     <Grid>
        <p className="total-device">{`${data.devices.length} devices`}</p>
        <div className="card-wrapper">
          { data.devices.map((device: deviceType) => (
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

export default GridList

