import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
function App() {
  return (
    <div className="App">
     <Provider store={store}>
 <Home></Home>
     </Provider>
    </div>
  );
}

export default App;
