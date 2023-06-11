import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './Store';
import type { OriginalType, UpdatedType } from './Types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//other custome hooks
//comparing search data and data from API
export function useSearch(
  dataOri: OriginalType,
  searchTerm: string,
  category: string = 'product'
) {
  const searchTermClean = searchTerm.replace(/[\\\/|{}()[\]<>?:+=^*;.,#!%]+/gmi,'');     //eslint-disable-line
  return searchTermClean.trim() ? dataOri.devices?.filter((item: OriginalType) =>
    new RegExp(searchTermClean, 'ig').test(item[category].name)
  ):[];
}

// same as above but fetching from extrated data
export function filterOut(
  data: UpdatedType,
  searchTerm: string,
  category: string = 'line'
) {
  return data?.filter((item: UpdatedType) =>
    item[category].name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
