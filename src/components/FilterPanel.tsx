import styled from 'styled-components';
import { loadData } from '../redux/features/data/UpdatedData';
import { OpenPanel } from '../redux/features/filterPanel/Panel';
import { clearActive, makeActiveOption } from '../redux/features/filters/Filter';
import { filterOut, useAppDispatch, useAppSelector } from './Hooks';
import { CloseIcon, StopButton } from './IconList';

interface FilterWrapperProps {
  showPanel: boolean;
}
const FilterWrapper = styled.div<FilterWrapperProps>`
  width: 18rem;
  border-radius: 5px;
  background-color: var(--color-white);
  box-shadow: -0.4rem 0.5rem 1.4rem 0rem var(--color-grey-4);
  z-index: 100;
  position: absolute;
  right: 1%;
  top: 30%;
  pointer-events: auto;
  visibility: ${({ showPanel }) => (showPanel ? 'visible' : 'hidden')};

  @media (max-width: 680px) {
    top: 75%;
    right: 6%;
  }

  & .panelHeading {
    height: 3.7rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-3);
    padding: 0 1.5rem;
    align-items: center;

    & > p {
      font-family: inherit;
    }

    & > button {
      background: none;
      border: none;
    }
  }

  & .panelBody {
    & h3 {
      padding: 1.5rem 0 0 1.5rem;
    }
    & ul {
      padding: 1.5rem 1.6rem 3rem;
      list-style-type: none;

      & li {
        cursor: pointer;
        .stop-button {
          position: relative;
          top: 0.7rem;
        }
        &:disabled {
          color: red;
        }
      }
    }
  }
`;

function FilterPanel() {
  const { filter, stable, panel } = useAppSelector((state) => state);
  const { isOpened: showPanel } = panel;
  const dispatch = useAppDispatch();

  function handleClick(
    event: React.MouseEvent<HTMLLIElement>,
    filterBy: string
  ) {
    if (stable.length) {
      // only work if there data to filter
      const filteredResult = filterOut(stable, filterBy);
      dispatch(makeActiveOption(event.currentTarget.id));
      dispatch(loadData(filteredResult));
    }
  }

  function handleCloseButton(event: React.MouseEvent<HTMLElement>) {
    dispatch(OpenPanel(false));
    dispatch(clearActive());
    dispatch(loadData(stable));
  }

  return (
    <FilterWrapper showPanel={showPanel}>
      {/* Panel heading */}
      <div className="panelHeading">
        {/* Filter label */}
        <p>Filter</p>
        {/* Close button */}
        <button onClick={handleCloseButton}>
          <CloseIcon />
        </button>
      </div>
      {/* Panel body */}
      <div className="panelBody">
        {/* Section heading */}
        <h3>Product line</h3>
        {/* Filter options */}
        <ul>
          {filter?.map(({ option, id, isActive }) => (
            <li
              key={id}
              id={id}
              onClick={(event) => handleClick(event, option)}
            >
              {/* Indicator for active option what make fill move to the active element*/}
              <StopButton isActive={isActive} size={20} />
              {/* Option text */}
              {option}
            </li>
          ))}
        </ul>
      </div>
    </FilterWrapper>
  );
}

export default FilterPanel;
