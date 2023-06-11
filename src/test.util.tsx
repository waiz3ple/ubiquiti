import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(<Provider store={store}>{ui}</Provider>, options);

export * from '@testing-library/react';
export { customRender as render };

