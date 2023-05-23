import { act } from '@testing-library/react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchDevies } from '../../redux/features/data/Devices';
import { loadData, makeActive } from '../../redux/features/data/UpdatedData';
import { useAppDispatch, useAppSelector, useSearchData } from '../../redux/hooks';
import { UpdatedType, deviceType } from '../../redux/types';
import { includeActiveProp } from '../../redux/util';
import SpecTable from './SpecTable';
const TableStyle = styled.table`
  width: 100%;  
  border-collapse: collapse;

  & > thead > tr, tbody > tr{
     display: grid;
     grid-template-columns: 1fr 3fr 10fr;
     //border-top: 1px solid red;
     border-bottom: 1px solid var(--color-grey-3);
  }
     
    &  td, th  {
       display: grid;
       
       text-align: left;
       padding: .5rem 2rem; 
       align-content: center; /*  hmm, fix this  */
       
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
        &  tr{
         // border: 1px solid red;
        }
       & tr:not(td:last-child){  // fix this too!
        cursor:pointer;
       }
       
       & img{
         width: 2rem;
       } 
       &  td:first-child{
         justify-items: end;
       } 
       
       & td:last-child{
         grid-column: 2/-1;
         border:none;
         justify-content: start;
         display: none;
       }
       & .last-td.active {
         display: block;
       }
     }
`;


function TableList(){  // make this reusable
    //---------------------
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
     console.log('table',filteredData)

    //---------------------
    return (
      <div>
        {loading && searchValue && <div>Loading...</div>}
        {!loading && error &&  (<div>Error: {error}</div>)}
        {!loading &&  filteredData?.length  && searchValue &&
         <TableStyle>
           <thead>
              <tr>
                <th>{`${filteredData.length} ${filteredData.length > 1 ? 'devices' : 'device' }`}</th>
                <th>Productline</th>
                <th>Name</th>
              </tr>
           </thead>
           <tbody>
              { filteredData.map((device: UpdatedType) => (
              <tr key={device.id}  onClick={()=> dispatch(makeActive(device.id))}>
                <td><img src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`} alt={device.product.name}/></td>
                <td>{device.line.name}</td>
                <td>{device.product.name}</td>
                <td className={`last-td ${device.isActive?'active':''}`}><SpecTable  device={device}/></td>
              </tr>
          ))}
           </tbody>
         </TableStyle>
        }
        </div>
    ) 
}

export default TableList;