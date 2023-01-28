import {configureStore} from "@reduxjs/toolkit";
import { launchApi } from "./api/api";
//   storing data 
export const store=configureStore({
    reducer:{
        [launchApi.reducerPath]:launchApi.reducer

    },
    // middleware attached to fetch data 
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(launchApi.middleware)
})