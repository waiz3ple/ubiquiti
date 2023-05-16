import { Key, useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()


//--------------------------
/* //other hooks
interface  deviceType{
    data: {
        line: {
        name:string
    };
     product: {
        name:string
    };
    id: Key; 
    icon: { 
        id: string; 
      };
    }
     
    }
export function useSearchData(data:deviceType, searchTerm:string){
    return useMemo(() =>{
        return data.data.filter((item.product.name) => item.includes(searchTerm))
    },[ searchTerm, data ])
} */
