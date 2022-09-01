import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'
import {getFirestore} from 'firebase/firestore/lite';
import {getDatabase,} from "firebase/database";
import {HashRouter} from "react-router-dom";
import {persistor, store} from "./App/store";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'

export const firebaseConfig = {
    apiKey: "AIzaSyCIuR9mkIDZZRCx5efJWAxs-nF6i2jRhK8",
    authDomain: "test-shop-e279d.firebaseapp.com",
    projectId: "test-shop-e279d",
    storageBucket: "test-shop-e279d.appspot.com",
    messagingSenderId: "964068195360",
    appId: "1:964068195360:web:21a2f8a6fc029cc14d9045",
    measurementId: "G-XXMHLZ9VSR"
};

const app = initializeApp(firebaseConfig);
export const db: any = getFirestore(app);
export const database = getDatabase(app);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </HashRouter>
);

reportWebVitals();
