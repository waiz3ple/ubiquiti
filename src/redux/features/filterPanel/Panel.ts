import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  isOpened: boolean;
}

const initialState: initialStateType = {
  isOpened: false,
};

const panelSlice = createSlice({
  name: 'filterPanel',
  initialState,
  reducers: {
    OpenPanel: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
  },
});

export default panelSlice.reducer;
export const { OpenPanel } = panelSlice.actions;
