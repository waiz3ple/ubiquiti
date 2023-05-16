import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

/* interface Device {
  name: string;
}

interface Data {
  loading: boolean;
  devices: Device[];
  error: string
}

interface ResponseData {
  data: Data;
} */
//------------
interface stateType {
    loading: boolean;
    data: AxiosResponse["data"];
    error: string;
}

const initialState: stateType = {
    loading: false,
    data: [],
    error: '' 
}

export const fetchDevies = createAsyncThunk('device/fetchSpec', async ()=>{
    const res = await axios.get('https://static.ui.com/fingerprint/ui/public.json');
    return res.data;
})

const deviceSlice = createSlice({
     name:'devices',
     initialState,
     reducers: {},
     extraReducers(builder) {
         builder.addCase(fetchDevies.pending, state => {
            state.loading = true;
         });

         builder.addCase(fetchDevies.fulfilled, (state, action:PayloadAction<[]>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
         });
         
        builder.addCase(fetchDevies.rejected, (state, action)=>{
            state.loading = false;
            state.data = [];
            state.error = action.error.message || 'Something went wrong from our end'
        })
     },
})

export default deviceSlice.reducer;