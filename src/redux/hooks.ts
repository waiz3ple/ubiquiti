import { Key, useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { deviceType } from './types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()


//--------------------------
 //other custome hooks

export function useSearchData( data: deviceType,
     searchTerm:string){
    const searchTermClean = searchTerm.replaceAll(/[\\\|\{\}\(\)\[\]\?\/\:\+\=\^\*]+/gm,'') //cleaned from Regex Reserved Chars
    return useMemo(() =>{
        return data.devices?.filter((item) => 
        new RegExp(searchTermClean, 'ig').test(item.product.name)
        );
    },[ searchTerm, data])
} 
