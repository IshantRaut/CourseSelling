import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};


const initialState = {
    profileImage: storedUser.profileImage || "",
};

const profitSlice = createSlice({
    name:"profit",
    initialState,
    reducers:{
        updateProfileImage:(state,action)=>{
            state.profileImage= action.payload;

            let user = JSON.parse(localStorage.getItem("loggedInUser")) || {};
            user.profileImage=action.payload;
            localStorage.setItem("loggedInUser",JSON.stringify(user));
        },
    },
});

export const {updateProfileImage} = profitSlice.actions;
export default profitSlice.reducer;