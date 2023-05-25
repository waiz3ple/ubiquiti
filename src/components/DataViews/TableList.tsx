import { act } from '@testing-library/react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector, useSearch } from '../../redux/Hooks';
import { UpdatedType } from '../../redux/Types';
import { includeActiveProp } from '../../redux/Util';
import { fetchDevies } from '../../redux/features/data/Devices';
import { loadData, makeActive } from '../../redux/features/data/UpdatedData';
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
         display:none;
       }
       & > .last-td.active{ display:block}
     }
`;


function TableList(){  // make this reusable
    //---------------------
   const { loading, data, error } = useAppSelector(state => state.devices);
    const searchValue = useAppSelector((state)=> state.search.value);
    // decison: since it a static data, I will reduce the number of API request to one by creating seprate reducer for updated data
    useEffect(()=>{ 
        dispatch(fetchDevies())   
    },[])
    
    
    const searchedResult = useSearch(data, searchValue)  // searched result
    const searchedResultActive = includeActiveProp( searchedResult ) // adding isActive properties to search result
    const dispatch = useAppDispatch()
    
    useEffect(()=>{  // 1. sending this updated result up to the updatedData state.
      dispatch(loadData(searchedResultActive))   
    },[searchValue])
    
    const updatedData = useAppSelector(state => state.updated);
    // console.log('Table',filteredData)
      
    //---------------------
    return (
      <div>
        {loading && searchValue && <div>Loading...</div>}
        {!loading && error &&  (<div>Error: {error}</div>)}
        {!loading   && searchValue &&
         <TableStyle>
           <thead>
              <tr>
                <th>{`${updatedData?.length} ${updatedData?.length > 1 ? 'devices' : 'device' }`}</th>
                <th>Productline</th>
                <th>Name</th>
              </tr>
           </thead>
           <tbody>
              {  updatedData?.length ? updatedData?.map((device: UpdatedType) => (
              <tr key={device.id}  onClick={()=> dispatch(makeActive(device.id))}>
                <td><img 
                    src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`} 
                    alt={device.product.name}/>
                </td>
                <td>{device.line.name}</td>
                <td>{device.product.name}</td>
                <td className={`${device.isActive? 'last-td active' :'last-td'}`}>
                   <SpecTable  device={device}/>
                </td>
              </tr>
          )):''}
           </tbody>
         </TableStyle>
        }
        </div>
    ) 
}

export default TableList;