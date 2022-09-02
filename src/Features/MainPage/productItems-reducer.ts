import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {db} from "../../index";
import {collection, getDocs} from "firebase/firestore/lite";

export type ProductItemsType = {
    name: string,
    cost: number,
    description: string,
    image: string
    id: string
}


export const fetchProductItemTC = createAsyncThunk<ProductItemsType[]>('mainPage/fetchProductItemTC', async (param, thunkAPI) => {
    const itemCol = collection(db, 'ProductItem');
    const itemSnapshot = await getDocs(itemCol);
    try {
        const items = itemSnapshot.docs.map(doc => doc.data())
        console.log('fetch')
        return items as ProductItemsType[]
    } catch (error) {
        return []
    }
})


export const slice = createSlice({
    name: 'productItems',
    initialState: {} as ProductItemsDomainType[],
    reducers: {
        changeStatusProductItemAC(state, action: PayloadAction<{ id: string, status: boolean }>) {
            const item = state.find((el) => el.id === action.payload.id)
            action.payload.status ? item!.status = false : item!.status = true
        },


    },
    extraReducers: builder => {
        builder
            .addCase(fetchProductItemTC.fulfilled, (state, {payload}) => {
                return payload.map((el) => ({...el, status: false, count: 1}))
            })

    }
})

export const productItemsReducer = slice.reducer
export const {
    changeStatusProductItemAC,

} = slice.actions

export type ProductItemsDomainType = ProductItemsType & {
    status: boolean
    count: number
}