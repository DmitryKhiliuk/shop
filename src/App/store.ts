import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import {productItemsReducer} from "../Features/MainPage/mainPage-reducer";
import storage from 'redux-persist/lib/storage'

export const rootReducer = combineReducers({
    main: productItemsReducer
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