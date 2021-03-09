import './App.css';
import React, { createContext, useContext, useState } from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Result from './Components/Result/Result';

export const contextAPI = createContext();

function App() {
 
  const [category, setCategory] = useState('laptop');


   
  return (
    <contextAPI.Provider value={[category, setCategory]}>
     
        <Header></Header>
    </contextAPI.Provider>
  )
 
}

export default App;
