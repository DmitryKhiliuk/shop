import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import {productItemsReducer} from "../Features/MainPage/productItems-reducer";
import storage from 'redux-persist/lib/storage'
import {cartReducer} from "../Features/ShoppingCart/cart-reducer";

export const rootReducer = combineReducers({
    items: productItemsReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).prepend(thunkMiddleware)
})

export const persistor  =  persistStore(store)
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;