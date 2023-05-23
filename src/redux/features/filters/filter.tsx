import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

interface PanelOption {
  option: string;
  isActive: boolean;
  id: string;
}

const panelOptions: PanelOption[] = [
  { option: 'UniFi', isActive: false, id: uuid() },
  { option: 'UniFiLTE', isActive: false, id: uuid() },
  { option: 'UniFiProtect', isActive: false, id: uuid() },
  { option: 'UniFiAccess', isActive: false, id: uuid() },
  { option: 'AirMax', isActive: false, id: uuid() },
  { option: 'EdgeMax', isActive: false, id: uuid() },
];

const filterSlice = createSlice({
  name: 'filters',
  initialState: panelOptions,
  reducers: {
    addOption: (state, action: PayloadAction<string>) => {
      state.push({ option: action.payload, isActive: false, id: uuid() });
    },

    makeActive: (state, action:PayloadAction<string>) =>{
        const id = action.payload;
        state.forEach(element => {
           element.isActive =  element.id === id;
        })
    },
    
    clearActive: (state)=> {
      state.forEach(element=> {
        element.isActive = false;
      })
    }
  },
});

export default filterSlice.reducer;
export const { addOption, makeActive, clearActive } = filterSlice.actions;
 






















/* interface Filter {
  [property:string]: unknown
}

const initialState: Filter[] = [
  { id: '1233', isActive: true },
  { id: '1433', isActive: true },
];

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    makeIsActiveState: (state, action: PayloadAction<Filter[]>) => {
      const arr = action.payload;
      arr.forEach((element) => {
        state.push({
          ...element,
          id: element.id || uuid(),
          isActive: false,
        });
      });
    },

    makeChildActive: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.forEach((element) => {
        element.isActive = element.id === id;
      });
    },
  },
});

export const { makeIsActiveState, makeChildActive } = filterSlice.actions;
export default filterSlice.reducer;
 */