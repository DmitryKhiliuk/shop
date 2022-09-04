import {ProductItemsDomainType} from "../MainPage/productItems-reducer";
import {v1} from "uuid";
import {addToCartAC, cartReducer, decCountAC, incCountAC, removeFromCartAC} from "./cart-reducer";


let productId1: string
let productId2: string
let startState: ProductItemsDomainType[] = []


beforeEach(() => {
    productId1: v1()
    productId2: v1()
    startState = [
        {id: productId1, name: 'Nokia', cost: 50, description: 'This is very good phone', image: 'image', status: false, count: 1},
        {id: productId2, name: 'Integral', cost: 88, description: 'This is not phone', image: 'some image', status: false, count: 1},
    ]
})

test('correct product should be added',  () => {
    let cartItem: ProductItemsDomainType = {id: '123', name: 'Siemens', cost: 15, description: 'This is phone', image: 'image' , status: false, count: 1}
    const endState = cartReducer(startState, addToCartAC({cartItem}))

    expect(endState.length).toBe(3)
    expect(endState[0].name).toBe('Siemens')
    expect(endState[2].cost).toBe(88)
})

test('correct product should be removed', () => {
    const endState = cartReducer(startState, removeFromCartAC({id: productId1}))

    expect(endState.length).toBe(1)
    expect(endState[0].name).toBe('Integral')
})

test('product should have correct quantity', () => {
    const endState = cartReducer(startState, incCountAC({id: productId1}))

    expect(endState[0].count).toBe(2)
    expect(endState[1].count).toBe(1)
})

test('product should have correct quantity again', () => {
    const endState = cartReducer(startState, decCountAC({id: productId1}))

    expect(endState[0].count).toBe(0)
    expect(endState[1].count).toBe(1)
})