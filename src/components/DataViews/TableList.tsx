import { useEffect } from 'react';
import styled from 'styled-components';
import NotFound from '../../pages/NotFound';
import { useAppDispatch, useAppSelector, useSearch } from '../../redux/Hooks';
import { UpdatedType } from '../../redux/Types';
import { includeActiveProp, processError } from '../../redux/Util';
import { fetchDevices } from '../../redux/features/data/Devices';
import { loadData, makeActive } from '../../redux/features/data/UpdatedData';
import { loadStableData } from '../../redux/features/data/UpdatedStableData';
import ListLoader from '../loaders/ListLoader';
import SpecTable from './SpecTable';


const TableStyle = styled.table<LoadAndErrorType>`
  width: 100%;  
  border-collapse: collapse;

  & > thead > tr, tbody > tr{
     display: grid;
     grid-template-columns: 1fr 3fr 10fr;
     border-bottom: 1px solid var(--color-grey-3);
  }
     
    &  td, th  {
       display: grid;
       
       text-align: left;
       padding: .5rem 2rem; 
       align-content: center;
       
       &:first-child{
        justify-items: center;
       }

     }

     &  thead {
         & tr{
          visibility: ${({loading, error}) => (!loading && error)? 'hidden':'visible'}
         }
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
       & tr:not(td:last-child){  
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
         @media (max-width: 600px){
           
         }
         &.active{
          display:block  /* the active one will only have access to this declearation */
         }
       }
     }

`;

interface LoadAndErrorType{
    loading: boolean;
    error: string|undefined
}

function TableList(){  // make this reusable
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
    
    useEffect(()=>{  // 1. sending this updated result up to the updatedData state.
      dispatch(loadData(searchedResultActive))   
      dispatch(loadStableData(searchedResultActive))   
    },[searchValue])
    
    const updatedData = useAppSelector(state => state.updated);
      
    //---------------------
    return (
      <div>
        {loading && searchValue && <ListLoader/>}
        {!loading && error && (NotFound(processError(error)))}
        {!loading   && searchValue &&
         <TableStyle loading={loading} error={error}>
           <thead>
              <tr>
                <th>{`${updatedData?.length??0} ${updatedData?.length>1?'devices':'device'}`}</th>
                <th>Productline</th>
                <th>Name</th>
              </tr>
           </thead>
           <tbody>
              {updatedData?.length ? updatedData?.map((device: UpdatedType) => (
              <tr key={device.id}  onClick={()=> dispatch(makeActive(device.id))}>
                <td><img 
                    src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`} 
                    alt={device.product.name}/>
                </td>
                <td>{device.line.name}</td>
                <td>{device.product.name}</td>
                <td className={`${device.isActive?'last-td active':'last-td'}`}>
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