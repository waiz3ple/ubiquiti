import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './Store';
import type { OriginalType, UpdatedType } from './Types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()


 //other custome hooks

export function useSearch(dataOri: OriginalType, searchTerm: string, category:string='product') {
  const searchTermClean = searchTerm.replaceAll(/[\\\|\{\}\(\)\[\]\?\/\:\+\=\^\*]+/gm, ''); // Cleaned from Regex Reserved Chars

  /* return useMemo(() => {
    return dataOri.devices?.filter((item: OriginalType) =>
      new RegExp(searchTermClean, 'ig').test(item[category].name)
    );
  }, [searchTerm, dataOri]); */

   
    return dataOri.devices?.filter((item: OriginalType) =>
      new RegExp(searchTermClean, 'ig').test(item[category].name)
    );

}


export function filterOut(data: UpdatedType, searchTerm:string, category:string ='line'){
    return data?.filter( (item: UpdatedType) => item[category].name.toLowerCase().includes( searchTerm.toLowerCase() ))
}