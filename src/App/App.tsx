import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../Features/MainPage/MainPage";
import {ShoppingCart} from "../Features/ShoppingCart/ShoppingCart";
import {Header} from "../Components/Header";



function App() {


  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/cart'} element={<ShoppingCart/>}/>
        </Routes>
    </div>
  );
}

export default App;
