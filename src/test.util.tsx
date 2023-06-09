import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/Store';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(<ReduxProvider store={store}>{ui}</ReduxProvider>, options);

export * from '@testing-library/react';
export { customRender as render };

