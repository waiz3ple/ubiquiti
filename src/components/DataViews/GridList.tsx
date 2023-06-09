import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchDevices } from '../../redux/features/data/Devices';
import { loadData } from '../../redux/features/data/UpdatedData';
import { loadStableData } from '../../redux/features/data/UpdatedStableData';
import { useAppDispatch, useAppSelector, useSearch } from '../Hooks';
import { UpdatedType } from '../Types';
import { includeActiveProp, processError } from '../Util';
import GridLoader from '../loaders/GridLoader';
import NotFound from '../pages/NotFound';
import Card from './Card';

interface LoadAndErrorType {
  loading: number;
  error: string | undefined;
}

const Grid = styled.div<LoadAndErrorType>`
  & .total-device {
    color: var(--color-grey-4);
    padding: 0 3rem 1rem;
    visibility: ${({ loading, error }) =>
      !loading && error ? 'hidden' : 'visible'};
  }
  & .card-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1110px) {
    & .card-wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 900px) {
    & .card-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 660px) {
    & .card-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 400px) {
    & .card-wrapper {
      grid-template-columns: repeat(1, 100%);
      gap: 1rem auto;
      justify-items: center;
      padding: 0;
    }
  }
`;

function GridList() {
  //---------------------
  const { loading, data, error } = useAppSelector((state) => state.devices);
  const searchValue = useAppSelector((state) => state.search.value);
  // getting data ready along page load
  useEffect(() => {
    dispatch(fetchDevices());
  }, []); //eslint-disable-line

  const searchedResult = useSearch(data, searchValue); // searched result
  const searchedResultActive = includeActiveProp(searchedResult); // adding isActive properties to search result
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 1. sending this updated result up to the updated state.
    dispatch(loadData(searchedResultActive));
    dispatch(loadStableData(searchedResultActive));
  }, [searchValue]);   //eslint-disable-line

  const updatedData = useAppSelector((state) => state.updated);
  

  //---------------------

  return (
    <div>
      {loading && searchValue && <GridLoader size={25} aria-busy={true} />}{' '}
      {/*show load only when swaping layout*/}
      {!loading && error && NotFound(processError(error))}
      {!loading && searchValue && (
        <Grid loading={+loading} error={error}>
          <p className="total-device">{`${updatedData?.length ?? 0}${
            updatedData?.length > 1 ? ' devices' : ' device'
          }`}</p>
          <div className="card-wrapper">
            {updatedData?.length
              ? updatedData?.map(({ id, product, line, icon }: UpdatedType) => (
                  <Card
                    key={id}
                    imgUrl={`https://static.ui.com/fingerprint/ui/icons/${icon.id}_257x257.png`}
                    productName={product.name}
                    productLine={line.name}
                  />
                ))
              : null}
          </div>
        </Grid>
      )}
    </div>
  );
}

export default GridList;
