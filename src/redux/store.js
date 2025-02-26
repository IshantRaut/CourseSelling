import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import cartReducer from "./cartSlice";
import courseReducer from "./courseSlice";
import searchReducer from "./searchSlice";
const store = configureStore({
    reducer: {
        profile: profileReducer,
        cart: cartReducer,
        courses: courseReducer,
        search: searchReducer,
    },
});

export default store;
