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
    },
    filter: function (arg0: (item: UpdatedType) => any): unknown {
        throw new Error('Function not implemented.');
    }
}

const updatedStableData =  createSlice({
    name: 'updatedStableData', /* this data will contain isActive and will be used on filters features */
    initialState,
    reducers: {
        loadStableData: (state, action:PayloadAction<UpdatedType>) =>  action.payload,
        makeStableActive:(state, action:PayloadAction<string>) => {
            const id = action.payload;
            state.forEach((element: UpdatedType) => {
            element.isActive =  element.id === id;
        })
        }
    }
})

export default updatedStableData.reducer;
export const { loadStableData, makeStableActive } =  updatedStableData.actions;