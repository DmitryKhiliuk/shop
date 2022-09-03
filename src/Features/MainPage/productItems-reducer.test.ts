import {v1} from "uuid";
import {fetchProductItemTC, productItemsReducer, ProductItemsType} from "./productItems-reducer";


let productId1: string
let productId2: string
let startState: ProductItemsType[] = []


beforeEach(() => {
    productId1: v1()
    productId2: v1()
    startState = [
        {id: productId1, name: 'Nokia', cost: 50, description: 'This is very good phone', image: 'image'},
        {id: productId2, name: 'Integral', cost: 88, description: 'This is not phone', image: 'some image'},
    ]
})

test('product items should be added',  () => {
    const action = fetchProductItemTC.fulfilled(startState, 'requestId')
    const  endState = productItemsReducer([], action)
    expect(endState.length).toBe(2)
})

test('', () => {
    const thunk = fetchProductItemTC()
    const dispatch = jest.fn()
    // @ts-ignore
    thunk(dispatch)
    expect(dispatch).toBeCalledTimes(2)

})