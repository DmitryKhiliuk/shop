import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {db} from "../../index";
import {collection, getDocs} from "firebase/firestore/lite";
import {setAppErrorAC, setAppStatusAC} from "../../App/app-reducer";

export type ProductItemsType = {
    name: string,
    cost: number,
    description: string,
    image: string
    id: string
}


export const fetchProductItemTC = createAsyncThunk<ProductItemsType[]>('mainPage/fetchProductItemTC', async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    const itemCol = collection(db, 'ProductItem');
    const itemSnapshot = await getDocs(itemCol);
    try {
        thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
        const items = itemSnapshot.docs.map(doc => doc.data())
        return items as ProductItemsType[]
    } catch (error) {
        thunkAPI.dispatch(setAppErrorAC({error: 'Some error occurred'}))
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        return thunkAPI.rejectWithValue({error, fieldsErrors: undefined})
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