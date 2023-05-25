import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UpdatedType } from '../../Types';



const initialState : UpdatedType = {
    id: '',
    isActive: false,
    product: {
        name: ''
    },
    line: {
        name: ''
    },
    icon: {
        id: ''
    }
}

const updatedData =  createSlice({
    name: 'updatedData', /* this data will contain isActive and will be used on filters features */
    initialState,
    reducers: {
        loadData: (state, action:PayloadAction<UpdatedType>) =>  action.payload,
        makeActive:(state, action:PayloadAction<string>) => {
            const id = action.payload;
            state.forEach((element: UpdatedType) => {
            element.isActive =  element.id === id;
        })
        }
    }
})

export default updatedData.reducer;
export const { loadData, makeActive } =  updatedData.actions;