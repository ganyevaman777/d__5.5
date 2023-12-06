import { configureStore } from "@reduxjs/toolkit";
import mathReducer from "./mathSlice"

export const store = configureStore({
    reducer: {
        mathReducer
    }
})