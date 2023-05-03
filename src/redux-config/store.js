import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer : {
        allUser : userSlice
    }
})

export default store;