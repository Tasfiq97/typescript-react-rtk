
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Launch } from '../models/models';


export const launchApi=createApi({
    // routes 
    reducerPath:"launchApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://api.spacexdata.com/v3/"}),
    // for cache managements 
    keepUnusedDataFor:30,
    endpoints:(builder)=>({
        launches:builder.query<Launch[],void>({
        query:()=>"/launches"
        })
    })
})

export const {useLaunchesQuery}=launchApi;