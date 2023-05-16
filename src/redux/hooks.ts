import { Key, useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { deviceType } from './types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()


//--------------------------
 //other custome hooks

export function useSearchData(data: deviceType, searchTerm:string){
    return useMemo(() =>{
        return data.devices?.filter((item: { product: { name: string }; }) => 
        new RegExp(searchTerm, 'i').test(item.product.name))
    },[ searchTerm, data ])
} 