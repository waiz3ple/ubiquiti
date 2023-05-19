import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchDevies } from '../../redux/features/data/Devices';
import { useAppDispatch, useAppSelector, useSearchData } from '../../redux/hooks';
import { deviceType } from '../../redux/types';
import SpecTable from './SpecTable';
const TableStyle = styled.table`
  width: 100%;  
  border-collapse: collapse;

  &  thead tr, tbody  tr{
     display: grid;
     grid-template-columns: 1fr 3fr 10fr;
     
  }
     
    &  td, th  {
       display: grid;
       border-bottom: 1px solid var(--color-grey-3);
       text-align: left;
       padding: .5rem 2rem;
       align-content: center;
       
       &:first-child{
        justify-items: center;
       }

     }

     &  thead {

        & th{
          padding-bottom: .5rem;

           &:first-child{
           font-size: .9rem;
        }

        &:not(:first-child){
           font-size: 1.2rem;
           text-transform: uppercase;
          }
        }
     }

     & tbody{
       font-size: 1.1rem;
       & img{
         width: 2rem;
       } 
       & > td:first-child{
         justify-items: end;
       } 
     }

`;


function TableList(){  // make this reusable
    //---------------------
    const devicesData = useAppSelector(state => state.devices);
    const searchValue = useAppSelector((state)=> state.search.value);
    const dispatch = useAppDispatch()
    useEffect(()=>{ 
        dispatch(fetchDevies())
    },[])
    
    const { loading, data, error } = devicesData;
    const searchData = useSearchData(data, searchValue)
   
    //console.log('memo', searchData)
    //console.log('wasiu:', data.devices) 
    //---------------------
    return (
      <div>
        {loading && searchValue && <div>Loading...</div>}
        {!loading && error &&  (<div>Error: {error}</div>)}
        {!loading &&  data.devices?.length  && searchValue &&
         <TableStyle>
           <thead>
              <tr>
                <th>{`${searchData.length} ${searchData.length > 1 ? 'devices' : 'device' }`}</th>
                <th>Productline</th>
                <th>Name</th>
              </tr>
           </thead>
           <tbody>
              { searchData.map((device: deviceType) => (
             <>
              <tr>
                <td><img src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`} alt={device.product.name}/></td>
                <td>{device.line.name}</td>
                <td>{device.product.name}</td>
              </tr>
                 <SpecTable device={device}/>
              </>
          ))}
           </tbody>
         </TableStyle>
        }
        </div>
    ) 
}

export default TableList;