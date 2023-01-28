import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Routes } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <RouterProvider router={routes} />
     </Provider>
    </div>
  );
}

export default App;
