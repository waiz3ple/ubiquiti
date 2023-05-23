import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import type { OriginalType, UpdatedType } from './types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()

//--------------------------
 //other custome hooks

export function useSearchData(data: UpdatedType, searchTerm: string) {
  const searchTermClean = searchTerm.replaceAll(/[\\\|\{\}\(\)\[\]\?\/\:\+\=\^\*]+/gm, ''); // Cleaned from Regex Reserved Chars

  return useMemo(() => {
    return data.devices?.filter((item: OriginalType) =>
      new RegExp(searchTermClean, 'ig').test(item.product.name)
    );
  }, [searchTerm, data]);
}
