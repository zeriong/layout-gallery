import {configureStore} from "@reduxjs/toolkit";
import {menuHandlerSlice} from "./slices/headerHandler.slice";

export const store = configureStore({
    reducer: {
        menuHandler: menuHandlerSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch