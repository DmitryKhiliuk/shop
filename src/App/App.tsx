import React from 'react';
import s from './App.module.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../Features/MainPage/MainPage";
import {ShoppingCart} from "../Features/ShoppingCart/ShoppingCart";
import {Header} from "../Components/Header";



function App() {


  return (
    <div >
        <Header/>
        <div className={s.content}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/cart'} element={<ShoppingCart/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
