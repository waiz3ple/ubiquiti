
import { configureStore } from "@reduxjs/toolkit";
import panelReducer from './features/filterPanel/Panel';

const store = configureStore({
    reducer: {
        panel: panelReducer
    }
    
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch