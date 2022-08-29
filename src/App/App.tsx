import React from 'react';
import s from './App.module.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {MainPage} from "../Features/MainPage/MainPage";
import {ShoppingCart} from "../Features/ShoppingCart/ShoppingCart";
import {Header} from "../Components/Header";



function App() {
    const navigate = useNavigate();

    const openCart = () => {
        navigate('/cart', {replace: true})
    }

    return (
        <div>
            <Header openCart={openCart}/>
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
