import { configureStore } from "@reduxjs/toolkit";
import addCardSlice from "./addCardSlice";

export const store = configureStore({
    reducer: {
        addCard: addCardSlice
    }
})