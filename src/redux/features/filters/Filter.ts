import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

interface PanelOption {
  option: string;
  isActive: boolean;
  id: string;
}
// -------------------------------
/* const panelOptions: PanelOption[] = [
  { option: 'UniFi', isActive: false, id: 2i3u1iu2i2 },
  { option: 'UniFi LTE', isActive: false, id: 292183h282 },
];       function  panelOption generate a list of array oject that look like this*/

function panelOptions(options: string[]){
  const keeper: PanelOption[] = [];
  options.forEach(option =>{
    keeper.push({
      option: option,
      isActive: false,
      id: uuid()
    })
  }) 
  return keeper;
}
const optionsArray :string[] = ['Unifi', 'UniFi LTE', 'UniFi Protect', 'UniFi Access', 'AirMax',  'EdgeMax']; 
//-----------------------------------------------------
const filterSlice = createSlice({
  name: 'filters',
  initialState: panelOptions(optionsArray),
  reducers: {
    makeActiveOption: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.forEach((element) => {
        element.isActive = element.id === id;
      });
    },

    clearActive: (state) => {
      state.forEach((element) => {
        element.isActive = false;
      });
    },
  },
});

export default filterSlice.reducer;
export const { makeActiveOption, clearActive } = filterSlice.actions;
