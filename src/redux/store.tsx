
import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from './features/data/Devices';
import panelReducer from './features/filterPanel/Panel';
import filterReducer from './features/filters/filter';
import searchReducer from './features/search/Search';
const store = configureStore({
    reducer: {
        panel: panelReducer,
        devices: deviceReducer,
        search: searchReducer,
        filter: filterReducer
    }
    
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch