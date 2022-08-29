import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'
import { getFirestore, collection, getDocs, doc , setDoc } from 'firebase/firestore/lite';
import { getDatabase, ref, set, child, get, onValue, } from "firebase/database";
import {HashRouter} from "react-router-dom";
import {store} from "./App/store";
import {Provider} from "react-redux";

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
export const db:any = getFirestore(app);
export const database = getDatabase(app);

/*const app = initializeApp(firebaseConfig);
const db:any = getFirestore(app);
const database = getDatabase(app);

const citiesRef = collection(db, "cities");
async function setCities() {
    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
}

async function getCities() {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}




function writeUserData(userId: string, name: string, email: string, imageUrl: string) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });

}




const onClickHandler = () => {
    console.log(getCities())
    const list = getCities()
    console.log(writeUserData('qwe', 'asdas', 'vcxvxc', 'dasdasd'))
    setCities()
}*/








const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      <HashRouter>
          <Provider store={store}>
              {/*<button onClick={onClickHandler}>button</button>*/}
              <App />
          </Provider>
      </HashRouter>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
