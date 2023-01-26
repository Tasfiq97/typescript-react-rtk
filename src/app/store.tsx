import {configureStore} from "@reduxjs/toolkit";
import { launchApi } from "./api/api";

export const store=configureStore({
    reducer:{
        [launchApi.reducerPath]:launchApi.reducer

    },
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(launchApi.middleware)
})