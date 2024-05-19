import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedin:false,
        isDarkMode: true,
    },
    reducers:{
        login(state){
            state.isLoggedin = true;
        },
        logout(state){
            state.isLoggedin = false;
        },
        toggleDarkMode(state){
            console.log("toggle clicked")
            console.log(state.isDarkMode)
            state.isDarkMode = !state.isDarkMode;
        },        
    }
});

export const authAction = authSlice.actions;
export default authSlice;