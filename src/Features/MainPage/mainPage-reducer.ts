import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {db} from "../../index";
import {collection, doc, getDocs, writeBatch, getDoc} from "firebase/firestore/lite";

export type ProductItemsType = {
    name: string,
    cost: number,
    description: string,
    status: boolean,
    image: string
    id: string
}

export type ItemsType = ProductItemsType[]

export const fetchProductItemTC = createAsyncThunk<ItemsType>('mainPage/fetchProductItemTC', async (param, thunkAPI) => {
    const itemCol = collection(db, 'ProductItem');
    const itemSnapshot = await getDocs(itemCol);
    try {
        const items = itemSnapshot.docs.map(doc => doc.data())
        return items as ItemsType
    } catch (error) {
        return []
    }
})

export const changeStatusProductItemTC = createAsyncThunk('mainPage/changeStatusProductItem', async (param: { id: string, status: boolean }, thunkAPI) => {
    const batch = writeBatch(db);
    const sfRef = doc(db, "ProductItem", `${param.id}`);
    !param.status ? batch.update(sfRef, {"status": true}) : batch.update(sfRef, {"status": false});
    await batch.commit();
    const docSnap = await getDoc(sfRef);
    const resId = docSnap.get('id')
    const resStatus = docSnap.get('status')
    return {resId, resStatus}
})

export const slice = createSlice({
    name: 'mainPage',
    initialState: {} as ItemsType,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductItemTC.fulfilled, (state, {payload}) => {
                console.log('fetch')
                return state = payload ? payload : state
            })
            .addCase(changeStatusProductItemTC.fulfilled, (state, action) => {

                const item = state.find((el) => el.id === action.payload.resId)

                if (item !== undefined) {
                    item.status = action.payload.resStatus
                }

            })
    }
})

export const productItemsReducer = slice.reducer