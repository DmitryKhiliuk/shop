import React from 'react';
import s from './App.module.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
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

                    <Route path={'/404'} element={<h1 style={{color: 'red'}}>404. Page not found</h1>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
