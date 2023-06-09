import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { ReactNode } from 'react';
import { timeoutPromise } from '../../../components/Util';

interface stateType {
    loading: boolean;
    data: AxiosResponse["data"];
    error: string;
}

const initialState: stateType = {
  loading: false,
  data: [],
  error: '',
}

export const fetchDevices = createAsyncThunk('device/fetchSpec', async ()=>{
    try {
      const res = await Promise.race([
      axios.get('https://static.ui.com/fingerprint/ui/public.json'), timeoutPromise()])
      return res.data;
    } catch (error) {
      throw error;
    }
})

const deviceSlice = createSlice({
     name:'devices',
     initialState,
     reducers: {},
     extraReducers(builder) {
         builder.addCase(fetchDevices.pending, state => {
            state.loading = true;
         });

         builder.addCase(fetchDevices.fulfilled, (state, action:PayloadAction<[]>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
         });
         
        builder.addCase(fetchDevices.rejected, (state, action)=>{
            state.loading = false;
            state.data = [];
            state.error = action.error.message || 'Something went wrong from our end'
        })
     },
})

export default deviceSlice.reducer;