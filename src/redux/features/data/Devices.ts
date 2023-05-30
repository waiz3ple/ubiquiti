import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { ReactNode } from 'react';

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
  error: '',
}

export const fetchDevices = createAsyncThunk('device/fetchSpec', async ()=>{
    const res = await axios.get('https://static.ui.com/fingerprint/ui/public.json');
    return res.data;
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


/* 

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { OriginalType } from './../../Types';
import { initialState as iniStateOriginal } from './UpdatedStableData';

interface StateType {
  loading: boolean;
  data: OriginalType;
  error: string;
}

const initialState: StateType = {
  loading: false,
  data: iniStateOriginal,
  error: '',
};

export const fetchDevices = createAsyncThunk('device/fetchSpec', async () => {
  const timeoutPromise = new Promise<OriginalType>(( _, reject ) => {
    setTimeout(() => {
      reject(new Error('Request timed out'));
    }, 5000); // 5000 milliseconds = 5 seconds
  });

  try {
    const res = await Promise.race([
      axios.get<OriginalType>('https://static.ui.com/fingerprint/ui/public.json'),
      timeoutPromise,
    ]);

    return res.data;
  } catch (error) {
    throw error;
  }
});

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDevices.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchDevices.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });

    builder.addCase(fetchDevices.rejected, (state, action) => {
      state.loading = false;
      state.data =  []
      state.error = action.error.message || 'Something went wrong from our end';
    });
  },
});

export default deviceSlice.reducer;

*/