import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("fetchAllUsers",async ()=>{
    let response = await axios.get("http://localhost:3000/admin/viewUsers");
    return response.data.allUsers;
})

const slice = createSlice({
    name : "user",
    initialState : {
        userList : [],
        isLoading : false,
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchAllUsers.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchAllUsers.fulfilled,(state,action)=>{
            state.userList = action.payload;
            state.isLoading = false;
        }).addCase(fetchAllUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops somthing went wrong...";
        })
    }
})

export default slice.reducer;