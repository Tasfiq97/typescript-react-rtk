import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import React from 'react';
import DetailPage from "../components/Home/detail page/DetailPage";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    
    },
    {
        path: "detail/:launchId",
        element: <DetailPage/>,
      },
  ]);
  
  export default routes;
  