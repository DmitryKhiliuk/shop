import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {db} from "../../index";
import {collection, getDocs} from "firebase/firestore/lite";

export type ProductItemsType = {
    name: string,
    cost: number,
    description: string,
    status: boolean,
    image: string
}

export type ItemsType = ProductItemsType[]

export const fetchProductItemTC = createAsyncThunk<ItemsType>('mainPage/fetchProductItemTC', async (param, thunkAPI)=> {
    const itemCol = collection(db, 'ProductItem');
    const itemSnapshot = await getDocs(itemCol);
    try {
        const items = itemSnapshot.docs.map(doc => doc.data())
        return items as ItemsType
    }
    catch (error) {
        return []
       console.log(error)
    }
})

export const slice = createSlice({
    name: 'mainPage',
    initialState: {} as ItemsType ,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductItemTC.fulfilled, (state, {payload}) => {
                return state = payload ? payload : state
            })
    }
})

export const productItemsReducer = slice.reducer