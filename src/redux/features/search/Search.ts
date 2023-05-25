import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: ''
}
const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
      deviceSearch: (state, action:PayloadAction<string>)=>{
        state.value = action.payload
      },
      clearSearch: (state) => {
         state.value = '';
      }
    }
})

export default searchSlice.reducer;
export const { deviceSearch, clearSearch } = searchSlice.actions