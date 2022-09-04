import {AppRootStateType} from "../App/store";

export const selectItems = (state: AppRootStateType) => state.items
export const selectCart = (state: AppRootStateType) => state.cart
export const selectStatus = (state: AppRootStateType) => state.app.status