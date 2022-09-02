import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductItemsDomainType} from "../MainPage/productItems-reducer";


export const slice = createSlice({
    name: 'cart',
    initialState: [] as ProductItemsDomainType[],
    reducers: {
        addToCartAC(state,action: PayloadAction<{ cartItem: ProductItemsDomainType}>){
            state && state.unshift(action.payload.cartItem)
            return state
        },
        removeFromCartAC(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(t => t.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1)
            }
        },
        incCountAC(state, action: PayloadAction<{ id: string }>) {
            const item = state.find((el) => el.id === action.payload.id)
            item && ++item.count
        },
        decCountAC(state, action: PayloadAction<{ id: string }>) {
            const item = state.find((el) => el.id === action.payload.id)
            item && --item.count
        },
    }
})

export const cartReducer = slice.reducer
export const {
    addToCartAC,
    incCountAC,
    decCountAC,
    removeFromCartAC
} = slice.actions